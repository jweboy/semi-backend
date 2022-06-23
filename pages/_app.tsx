import '../styles/globals.css'
import type { AppProps } from 'next/app'
import connect from '../lib/database/database/database'
import PrimaryLayout from '../layout'

function MyApp({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout || ((page) => page)

  return (<PrimaryLayout>
    <Component {...pageProps} />
  </PrimaryLayout>)
}

export default MyApp
