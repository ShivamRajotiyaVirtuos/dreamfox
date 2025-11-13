import Layout from "@/components/Layout/layout";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import client from "../lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
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
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll to top when route changes
      window.scrollTo(0, 0);

      // Alternative: For smooth scroll behavior
      // window.scrollTo({
      //   top: 0,
      //   left: 0,
      //   behavior: 'smooth'
      // });
    };

    handleRouteChange()
  }, [router.asPath, router.events]);
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
