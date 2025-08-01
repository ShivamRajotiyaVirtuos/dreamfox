import Layout from "@/components/Layout/layout";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import client from "./lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
// Dynamically import WebGL component to avoid SSR issues
const WebGLCursorEffect = dynamic(() => import("@/components/Webgl/webgl"), {
  ssr: false,
});
// const SmoothScroll = dynamic(
//   () => import("@/components/SmoothScroll/SmoothScroll"),
//   {
//     ssr: false,
//   }
// );

const ScrollSmootherWrapper = dynamic(
  () => import("@/components/SmoothScroll/SmoothScrollWrapper"),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <WebGLCursorEffect />
      {/* <SmoothScroll> */}
      <ApolloProvider client={client}>
        <ScrollSmootherWrapper>
          <Component {...pageProps} />
        </ScrollSmootherWrapper>
      </ApolloProvider>
      {/* </SmoothScroll> */}
    </>
  );
}
