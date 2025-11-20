import Layout from "@/components/Layout/layout";
import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import client from "../lib/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SEOHead from "@/components/seohead/seohead";
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
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXV4TPDV');`,
        }}
      />

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CKSP8XNWKJ"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CKSP8XNWKJ');
          `,
        }}
      />

      <WebGLCursorEffect />
      <SEOHead />
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
