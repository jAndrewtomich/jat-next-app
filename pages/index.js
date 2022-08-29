import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Logo from '../public/images/niceColors1.svg'


export default function Home() {
  return (
    <>
        <Head>
          <title>Andrew's Page</title>
        </Head>

      <div className={styles.landingcontainer}>
        <main className={ styles.main }>
          {/* <h1 className={ styles.indextitle }>ANDREW TOMICH</h1> */}

          <Image className={ styles.Applogo } src={ Logo } height={ 360 } width={ 360 } />


        </main>

        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  )
}
