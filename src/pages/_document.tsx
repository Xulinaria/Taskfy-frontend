import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="eu">
      <Head>
        <meta charSet="utg-8" />
        <title>ToDo</title>
        <link rel="icon" href="/assets/logo/icon.jpg" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
