
import type { AppProps } from 'next/app'
import Home from '.'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Home><Component {...pageProps} /></Home>
  )
}
