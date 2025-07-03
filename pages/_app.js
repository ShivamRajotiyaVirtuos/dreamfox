import Layout from '@/components/Layout/layout'
import WebGLCursorEffect from '@/components/Webgl/webgl'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <WebGLCursorEffect />
      <Component {...pageProps} />
    </Layout>
  )
}