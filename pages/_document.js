import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="7ZYigLaiHmOoedZGHjAH681d323gSj0AyiWAgmnOg5E" />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXV4TPDV');`,
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CKSP8XNWKJ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CKSP8XNWKJ');
            `,
          }}
        />

        {/* Favicon links */}
        <link rel="icon" href="/logos/dreamfox_emblem.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/logos/dreamfox_emblem.svg" color="#E62D8D" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/logos/dreamfox_emblem.svg" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#E62D8D" />

        {/* Robots meta - remove noindex for production */}
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Viewport meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TXV4TPDV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}