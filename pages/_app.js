import '../styles/globals.css'
import Head from 'next/head'
import MyNavbar from './components/MyNavbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      {/* BOOTSTRAP CSS */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous" />
      </Head>
      <MyNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
