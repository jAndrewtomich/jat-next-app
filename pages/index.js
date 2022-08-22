import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Logo from '../public/images/niceColors1.svg'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import MyNavbar from './components/MyNavbar'

export default function Home() {
  return (
    <>
        <Head>
          <title>Andrew's Page</title>
          <meta name="description" content="All About Andrew" />
          <link rel="icon" href="/../public/favicon.ico" />
        </Head>

        <MyNavbar />

      <div className={styles.container}>
        <main className={ styles.main }>
          {/* <h1 className={ styles.indextitle }>ANDREW TOMICH</h1> */}

          <Image className={ styles.Applogo } src={ Logo } height={ 360 } width={ 360 } />


        </main>

          <Container style={{color: `white`}}>
            <Row>
              <Col>
                <h1>HERE IS SOME NEW TEXT IN COLUMN 1</h1>
              </Col>
              <Col>
                <h1>HERE IS SOME NEW TEXT IN COLUMN 2</h1>
              </Col>
              <Col>
                <h1>HERE IS SOME NEW TEXT IN COLUMN 3</h1>
              </Col>
            </Row>
          </Container>

        <footer className={styles.footer}>
        </footer>
      </div>
    </>
  )
}
