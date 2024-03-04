import '@styles/globals.css'

import type { AppProps } from 'next/app'

export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <main className="px-10">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
