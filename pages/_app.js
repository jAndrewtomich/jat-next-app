import '../styles/globals.css'
import Head from 'next/head'
import MyNavbar from './components/MyNavbar'
import { SSRProvider } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
          <meta name="description" content="All About Andrew's Work" />
      </Head>
      <MyNavbar />
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp
