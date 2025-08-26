import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon links */}
        <link rel="icon" href="/logos/dreamfox_emblem.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/logos/dreamfox_emblem.svg" color="#E62D8D" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/logos/dreamfox_emblem.svg" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#E62D8D" />
      </Head>
      <meta name="robots" content="noindex, nofollow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
