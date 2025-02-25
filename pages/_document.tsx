import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Theo in Tech - Web3 & AI Senior Engineer with 10+ years of experience. Building innovative solutions and mentoring developers."
        />
        <meta
          name="keywords"
          content="Theo in Tech, Web3, AI, Software Engineer, Developer, Philippines, Remote Work"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Theo in Tech - Web3 & AI Senior Engineer"
        />
        <meta
          property="og:description"
          content="Senior Engineer with 10+ years experience building Web3 & AI solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-image.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Theo in Tech - Web3 & AI Senior Engineer"
        />
        <meta
          name="twitter:description"
          content="Senior Engineer with 10+ years experience building Web3 & AI solutions"
        />
        <meta name="twitter:image" content="/assets/og-image.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
