import React, { useEffect, useRef } from "react";

const WebGLCursorEffect = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const glRef = useRef(null);
  const programsRef = useRef({});
  const buffersRef = useRef({});
  const pointersRef = useRef([]);
  const splatStackRef = useRef([]);
  const lastTimeRef = useRef(Date.now());

  // Configuration
  const config = {
    TEXTURE_DOWNSAMPLE: 1,
    DENSITY_DISSIPATION: 0.97,
    VELOCITY_DISSIPATION: 0.99,
    PRESSURE_DISSIPATION: 0.8,
    PRESSURE_ITERATIONS: 25,
    CURL: 1,
    SPLAT_RADIUS: 0.00039,
  };

  // Initialize WebGL context
  const initWebGL = (canvas) => {
    const params = {
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
    };
    let gl = canvas.getContext("webgl2", params);
    const isWebGL2 = !!gl;

    if (!isWebGL2) {
      gl =
        canvas.getContext("webgl", params) ||
        canvas.getContext("experimental-webgl", params);
    }
    if (!gl) {
      console.error("WebGL not supported");
      return null;
    }
    let halfFloat;
    let supportLinearFiltering;

    if (isWebGL2) {
      gl.getExtension("EXT_color_buffer_float");
      supportLinearFiltering = gl.getExtension("OES_texture_float_linear");
    } else {
      halfFloat = gl.getExtension("OES_texture_half_float");
      supportLinearFiltering = gl.getExtension("OES_texture_half_float_linear");
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    const halfFloatTexType = isWebGL2
      ? gl.HALF_FLOAT
      : halfFloat
      ? halfFloat.HALF_FLOAT_OES
      : gl.FLOAT;

    let formatRGBA, formatRG, formatR;

    if (isWebGL2) {
      formatRGBA = getSupportedFormat(
        gl,
        gl.RGBA16F,
        gl.RGBA,
        halfFloatTexType
      );
      formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
      formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
    } else {
      formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    }

    return {
      gl,
      ext: {
        formatRGBA,
        formatRG,
        formatR,
        halfFloatTexType,
        supportLinearFiltering,
      },
    };
  };

  const getSupportedFormat = (gl, internalFormat, format, type) => {
    if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
      switch (internalFormat) {
        case gl.R16F:
          return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
        case gl.RG16F:
          return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
        default:
          return { internalFormat: gl.RGBA, format: gl.RGBA };
      }
    }
    return { internalFormat, format };
  };

  const supportRenderTextureFormat = (gl, internalFormat, format, type) => {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      internalFormat,
      4,
      4,
      0,
      format,
      type,
      null
    );

    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );

    const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    return status === gl.FRAMEBUFFER_COMPLETE;
  };

  const compileShader = (gl, type, source) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  };

  const createProgram = (gl, vertexShader, fragmentShader) => {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return null;
    }

    const uniforms = {};
    const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    for (let i = 0; i < uniformCount; i++) {
      const uniformName = gl.getActiveUniform(program, i).name;
      uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
    }

    return { program, uniforms };
  };

  const createFBO = (gl, texId, w, h, internalFormat, format, type, param) => {
    gl.activeTexture(gl.TEXTURE0 + texId);
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      internalFormat,
      w,
      h,
      0,
      format,
      type,
      null
    );

    let fbo = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      texture,
      0
    );
    gl.viewport(0, 0, w, h);
    gl.clear(gl.COLOR_BUFFER_BIT);

    return [texture, fbo, texId];
  };

  const createDoubleFBO = (
    gl,
    texId,
    w,
    h,
    internalFormat,
    format,
    type,
    param
  ) => {
    let fbo1 = createFBO(gl, texId, w, h, internalFormat, format, type, param);
    let fbo2 = createFBO(
      gl,
      texId + 1,
      w,
      h,
      internalFormat,
      format,
      type,
      param
    );

    return {
      get read() {
        return fbo1;
      },
      get write() {
        return fbo2;
      },
      swap() {
        let temp = fbo1;
        fbo1 = fbo2;
        fbo2 = temp;
      },
    };
  };

  const initShaders = (gl, ext) => {
    const baseVertexShader = compileShader(
      gl,
      gl.VERTEX_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;
      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `
    );

    const displayShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main () {
        gl_FragColor = texture2D(uTexture, vUv);
      }
    `
    );

    const splatShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
      }
    `
    );

    const advectionShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      void main () {
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        gl_FragColor = dissipation * texture2D(uSource, coord);
        gl_FragColor.a = 1.0;
      }
    `
    );

    const advectionManualFilteringShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      vec4 bilerp (in sampler2D sam, in vec2 p) {
        vec4 st;
        st.xy = floor(p - 0.5) + 0.5;
        st.zw = st.xy + 1.0;
        vec4 uv = st * texelSize.xyxy;
        vec4 a = texture2D(sam, uv.xy);
        vec4 b = texture2D(sam, uv.zy);
        vec4 c = texture2D(sam, uv.xw);
        vec4 d = texture2D(sam, uv.zw);
        vec2 f = p - st.xy;
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      void main () {
        vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;
        gl_FragColor = dissipation * bilerp(uSource, coord);
        gl_FragColor.a = 1.0;
      }
    `
    );

    const divergenceShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      vec2 sampleVelocity (in vec2 uv) {
        vec2 multiplier = vec2(1.0, 1.0);
        if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }
        if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }
        if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }
        if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }
        return multiplier * texture2D(uVelocity, uv).xy;
      }
      void main () {
        float L = sampleVelocity(vL).x;
        float R = sampleVelocity(vR).x;
        float T = sampleVelocity(vT).y;
        float B = sampleVelocity(vB).y;
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `
    );

    const curlShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
      }
    `
    );

    const vorticityShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      void main () {
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = vec2(abs(T) - abs(B), 0.0);
        force *= 1.0 / length(force + 0.00001) * curl * C;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
      }
    `
    );

    const pressureShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      vec2 boundary (in vec2 uv) {
        uv = min(max(uv, 0.0), 1.0);
        return uv;
      }
      void main () {
        float L = texture2D(uPressure, boundary(vL)).x;
        float R = texture2D(uPressure, boundary(vR)).x;
        float T = texture2D(uPressure, boundary(vT)).x;
        float B = texture2D(uPressure, boundary(vB)).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `
    );

    const gradientSubtractShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      vec2 boundary (in vec2 uv) {
        uv = min(max(uv, 0.0), 1.0);
        return uv;
      }
      void main () {
        float L = texture2D(uPressure, boundary(vL)).x;
        float R = texture2D(uPressure, boundary(vR)).x;
        float T = texture2D(uPressure, boundary(vT)).x;
        float B = texture2D(uPressure, boundary(vB)).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `
    );

    const clearShader = compileShader(
      gl,
      gl.FRAGMENT_SHADER,
      `
      precision highp float;
      precision mediump sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `
    );

    return {
      displayProgram: createProgram(gl, baseVertexShader, displayShader),
      splatProgram: createProgram(gl, baseVertexShader, splatShader),
      advectionProgram: createProgram(
        gl,
        baseVertexShader,
        ext.supportLinearFiltering
          ? advectionShader
          : advectionManualFilteringShader
      ),
      divergenceProgram: createProgram(gl, baseVertexShader, divergenceShader),
      curlProgram: createProgram(gl, baseVertexShader, curlShader),
      vorticityProgram: createProgram(gl, baseVertexShader, vorticityShader),
      pressureProgram: createProgram(gl, baseVertexShader, pressureShader),
      gradientSubtractProgram: createProgram(
        gl,
        baseVertexShader,
        gradientSubtractShader
      ),
      clearProgram: createProgram(gl, baseVertexShader, clearShader),
    };
  };

  const initBuffers = (gl) => {
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
      gl.STATIC_DRAW
    );
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array([0, 1, 2, 0, 2, 3]),
      gl.STATIC_DRAW
    );
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(0);
  };

  const blit = (gl, destination) => {
    gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };

  const splat = (gl, programs, buffers, x, y, dx, dy, color) => {
    const canvas = gl.canvas;

    gl.useProgram(programs.splatProgram.program);
    gl.uniform1i(
      programs.splatProgram.uniforms.uTarget,
      buffers.velocity.read[2]
    );
    gl.uniform1f(
      programs.splatProgram.uniforms.aspectRatio,
      canvas.width / canvas.height
    );
    gl.uniform2f(
      programs.splatProgram.uniforms.point,
      x / canvas.width,
      1.0 - y / canvas.height
    );
    gl.uniform3f(programs.splatProgram.uniforms.color, dx, -dy, 1.0);
    gl.uniform1f(programs.splatProgram.uniforms.radius, config.SPLAT_RADIUS);
    blit(gl, buffers.velocity.write[1]);
    buffers.velocity.swap();

    gl.uniform1i(
      programs.splatProgram.uniforms.uTarget,
      buffers.density.read[2]
    );
    gl.uniform3f(
      programs.splatProgram.uniforms.color,
      color[0] * 0.15, // Reduced from 0.3
      color[1] * 0.15, // Reduced from 0.3
      color[2] * 0.15 // Reduced from 0.3
    );
    blit(gl, buffers.density.write[1]);
    buffers.density.swap();
  };

  const multipleSplats = (gl, programs, buffers, amount) => {
    for (let i = 0; i < amount; i++) {
      const color = [
        Math.random() * 10,
        Math.random() * 10,
        Math.random() * 10,
      ];
      const x = gl.canvas.width * Math.random();
      const y = gl.canvas.height * Math.random();
      const dx = 1000 * (Math.random() - 0.5);
      const dy = 1000 * (Math.random() - 0.5);
      splat(gl, programs, buffers, x, y, dx, dy, color);
    }
  };

  const update = () => {
    const glData = glRef.current;
    if (!glData) return;

    const { gl } = glData;
    const canvas = gl.canvas;
    const programs = programsRef.current;
    const buffers = buffersRef.current;
    const pointers = pointersRef.current;
    const splatStack = splatStackRef.current;

    // Resize canvas if needed
    if (
      canvas.width !== canvas.clientWidth ||
      canvas.height !== canvas.clientHeight
    ) {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      initFramebuffers(gl, buffers);
    }

    const dt = Math.min((Date.now() - lastTimeRef.current) / 1000, 0.016);
    lastTimeRef.current = Date.now();

    gl.viewport(0, 0, buffers.textureWidth, buffers.textureHeight);

    if (splatStack.length > 0) {
      multipleSplats(gl, programs, buffers, splatStack.pop());
    }

    // Advection
    gl.useProgram(programs.advectionProgram.program);
    gl.uniform2f(
      programs.advectionProgram.uniforms.texelSize,
      1.0 / buffers.textureWidth,
      1.0 / buffers.textureHeight
    );
    gl.uniform1i(
      programs.advectionProgram.uniforms.uVelocity,
      buffers.velocity.read[2]
    );
    gl.uniform1i(
      programs.advectionProgram.uniforms.uSource,
      buffers.velocity.read[2]
    );
    gl.uniform1f(programs.advectionProgram.uniforms.dt, dt);
    gl.uniform1f(
      programs.advectionProgram.uniforms.dissipation,
      config.VELOCITY_DISSIPATION
    );
    blit(gl, buffers.velocity.write[1]);
    buffers.velocity.swap();

    gl.uniform1i(
      programs.advectionProgram.uniforms.uVelocity,
      buffers.velocity.read[2]
    );
    gl.uniform1i(
      programs.advectionProgram.uniforms.uSource,
      buffers.density.read[2]
    );
    gl.uniform1f(
      programs.advectionProgram.uniforms.dissipation,
      config.DENSITY_DISSIPATION
    );
    blit(gl, buffers.density.write[1]);
    buffers.density.swap();

    // Process pointer movements
    for (let i = 0; i < pointers.length; i++) {
      const pointer = pointers[i];
      if (pointer.moved) {
        splat(
          gl,
          programs,
          buffers,
          pointer.x,
          pointer.y,
          pointer.dx,
          pointer.dy,
          pointer.color
        );
        pointer.moved = false;
      }
    }

    // Curl
    gl.useProgram(programs.curlProgram.program);
    gl.uniform2f(
      programs.curlProgram.uniforms.texelSize,
      1.0 / buffers.textureWidth,
      1.0 / buffers.textureHeight
    );
    gl.uniform1i(
      programs.curlProgram.uniforms.uVelocity,
      buffers.velocity.read[2]
    );
    blit(gl, buffers.curl[1]);

    // Vorticity
    gl.useProgram(programs.vorticityProgram.program);
    gl.uniform2f(
      programs.vorticityProgram.uniforms.texelSize,
      1.0 / buffers.textureWidth,
      1.0 / buffers.textureHeight
    );
    gl.uniform1i(
      programs.vorticityProgram.uniforms.uVelocity,
      buffers.velocity.read[2]
    );
    gl.uniform1i(programs.vorticityProgram.uniforms.uCurl, buffers.curl[2]);
    gl.uniform1f(programs.vorticityProgram.uniforms.curl, config.CURL);
    gl.uniform1f(programs.vorticityProgram.uniforms.dt, dt);
    blit(gl, buffers.velocity.write[1]);
    buffers.velocity.swap();

    // Divergence
    gl.useProgram(programs.divergenceProgram.program);
    gl.uniform2f(
      programs.divergenceProgram.uniforms.texelSize,
      1.0 / buffers.textureWidth,
      1.0 / buffers.textureHeight
    );
    gl.uniform1i(
      programs.divergenceProgram.uniforms.uVelocity,
      buffers.velocity.read[2]
    );
    blit(gl, buffers.divergence[1]);

    // Clear pressure
    gl.useProgram(programs.clearProgram.program);
    let pressureTexId = buffers.pressure.read[2];
    gl.activeTexture(gl.TEXTURE0 + pressureTexId);
    gl.bindTexture(gl.TEXTURE_2D, buffers.pressure.read[0]);
    gl.uniform1i(programs.clearProgram.uniforms.uTexture, pressureTexId);
    gl.uniform1f(
      programs.clearProgram.uniforms.value,
      config.PRESSURE_DISSIPATION
    );
    blit(gl, buffers.pressure.write[1]);
    buffers.pressure.swap();

    // Pressure iterations
    gl.useProgram(programs.pressureProgram.program);
    gl.uniform2f(
      programs.pressureProgram.uniforms.texelSize,
      1.0 / buffers.textureWidth,
      1.0 / buffers.textureHeight
    );
    gl.uniform1i(
      programs.pressureProgram.uniforms.uDivergence,
      buffers.divergence[2]
    );
    pressureTexId = buffers.pressure.read[2];
    gl.uniform1i(programs.pressureProgram.uniforms.uPressure, pressureTexId);
    gl.activeTexture(gl.TEXTURE0 + pressureTexId);
    for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
      gl.bindTexture(gl.TEXTURE_2D, buffers.pressure.read[0]);
      blit(gl, buffers.pressure.write[1]);
      buffers.pressure.swap();
    }

    // Gradient subtraction
    gl.useProgram(programs.gradientSubtractProgram.program);
    gl.uniform2f(
      programs.gradientSubtractProgram.uniforms.texelSize,
      1.0 / buffers.textureWidth,
      1.0 / buffers.textureHeight
    );
    gl.uniform1i(
      programs.gradientSubtractProgram.uniforms.uPressure,
      buffers.pressure.read[2]
    );
    gl.uniform1i(
      programs.gradientSubtractProgram.uniforms.uVelocity,
      buffers.velocity.read[2]
    );
    blit(gl, buffers.velocity.write[1]);
    buffers.velocity.swap();

    // Render to screen
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    gl.useProgram(programs.displayProgram.program);
    gl.uniform1i(
      programs.displayProgram.uniforms.uTexture,
      buffers.density.read[2]
    );
    blit(gl, null);

    animationRef.current = requestAnimationFrame(update);
  };

  const initFramebuffers = (gl, buffers) => {
    const textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
    const textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

    const texType = glRef.current.ext.halfFloatTexType;
    const rgba = glRef.current.ext.formatRGBA;
    const rg = glRef.current.ext.formatRG;
    const r = glRef.current.ext.formatR;

    buffers.textureWidth = textureWidth;
    buffers.textureHeight = textureHeight;
    buffers.density = createDoubleFBO(
      gl,
      2,
      textureWidth,
      textureHeight,
      rgba.internalFormat,
      rgba.format,
      texType,
      glRef.current.ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
    );
    buffers.velocity = createDoubleFBO(
      gl,
      0,
      textureWidth,
      textureHeight,
      rg.internalFormat,
      rg.format,
      texType,
      glRef.current.ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST
    );
    buffers.divergence = createFBO(
      gl,
      4,
      textureWidth,
      textureHeight,
      r.internalFormat,
      r.format,
      texType,
      gl.NEAREST
    );
    buffers.curl = createFBO(
      gl,
      5,
      textureWidth,
      textureHeight,
      r.internalFormat,
      r.format,
      texType,
      gl.NEAREST
    );
    buffers.pressure = createDoubleFBO(
      gl,
      6,
      textureWidth,
      textureHeight,
      r.internalFormat,
      r.format,
      texType,
      gl.NEAREST
    );
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const pointer = pointersRef.current[0];
    if (pointer) {
      pointer.moved = pointer.down;
      pointer.dx = (x - pointer.x) * 10.0;
      pointer.dy = (y - pointer.y) * 10.0;
      pointer.x = x;
      pointer.y = y;
    }
  };

  const handleMouseMove2 = () => {
    const pointer = pointersRef.current[0];
    if (pointer) {
      pointer.down = true;
      const colorOptions = [
        [0.0, 0.5, 1.0], // Blue
        [1.0, 0.0, 1.0], // Magenta
        [0.0, 1.0, 1.0], // Cyan
        [1.0, 0.0, 0.0], // Red
      ];
      pointer.color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
    }
  };

  const handleMouseUp = () => {
    const pointer = pointersRef.current[0];
    if (pointer) {
      pointer.down = false;
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const touches = e.targetTouches;

    for (let i = 0; i < touches.length; i++) {
      if (i < pointersRef.current.length) {
        const pointer = pointersRef.current[i];
        const x = touches[i].clientX - rect.left;
        const y = touches[i].clientY - rect.top;

        pointer.moved = pointer.down;
        pointer.dx = (x - pointer.x) * 10.0;
        pointer.dy = (y - pointer.y) * 10.0;
        pointer.x = x;
        pointer.y = y;
      }
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const rect = canvasRef.current.getBoundingClientRect();
    const touches = e.targetTouches;

    for (let i = 0; i < touches.length; i++) {
      if (i >= pointersRef.current.length) {
        pointersRef.current.push({
          id: -1,
          x: 0,
          y: 0,
          dx: 0,
          dy: 0,
          down: false,
          moved: false,
          color: [0.863, 0.384, 0.388], // #DC6263
        });
      }

      const pointer = pointersRef.current[i];
      pointer.id = touches[i].identifier;
      pointer.down = true;
      pointer.x = touches[i].clientX - rect.left;
      pointer.y = touches[i].clientY - rect.top;
      const colorOptions = [
        [0.0, 0.5, 1.0], // Blue
        [1.0, 0.0, 1.0], // Magenta
        [0.0, 1.0, 1.0], // Cyan
        [1.0, 0.0, 0.0], // Red
      ];
      pointer.color =
        colorOptions[Math.floor(Math.random() * colorOptions.length)];
    }
  };

  const handleTouchEnd = (e) => {
    const touches = e.changedTouches;
    for (let i = 0; i < touches.length; i++) {
      for (let j = 0; j < pointersRef.current.length; j++) {
        if (touches[i].identifier === pointersRef.current[j].id) {
          pointersRef.current[j].down = false;
        }
      }
    }
  };

  const handleMouseLeave = () => {
    if (pointersRef.current[0]) {
      pointersRef.current[0].down = false;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize WebGL
    const webglContext = initWebGL(canvas);
    if (!webglContext) return;

    const { gl, ext } = webglContext;
    glRef.current = { gl, ext };

    // Initialize pointer
    pointersRef.current = [
      {
        id: -1,
        x: 0,
        y: 0,
        dx: 0,
        dy: 0,
        down: false,
        moved: false,
        color: [30, 0, 300],
      },
    ];

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize shaders and programs
    const programs = initShaders(gl, ext);
    programsRef.current = programs;

    // Initialize vertex buffers
    initBuffers(gl);

    // Initialize framebuffers
    const buffers = {};
    initFramebuffers(gl, buffers);
    buffersRef.current = buffers;

    // Start animation loop
    update();

    // Event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousemove", handleMouseMove2);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initFramebuffers(gl, buffers);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousemove", handleMouseMove2);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default WebGLCursorEffect;
