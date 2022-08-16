import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Image from 'next/image'
import Logo from '../public/images/2dPieChart.svg'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
      {/* <div> */}
        <Head>
          <title>Andrew's Page</title>
          <meta name="description" content="All About Andrew" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={ styles.main }>
          <h1 className={ styles.title }>ANDREW TOMICH</h1>

          <Image src={ Logo } height={ 180 } width={ 180 } />

          <a className='btn btn-primary' href="http://localhost:8888/tree/pages/components/jnb/eda.ipynb" target="_blank">button</a>

        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin='anonymous'></Script>
      <Script src="components/navShowHide.js"></Script>
    </>
  )
}
