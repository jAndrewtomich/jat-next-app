import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Container from 'react-bootstrap/Container'

export default function About() {
    return (
        <>
            <Head>
                <title>About Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.albummain}>
                <Container fluid>
                    <div className="bg-dark text-secondary px-4 py-5 text-center">
                        <div className="py-5">
                            <h1 className="display-5 fw-bold text-white">Andrew Tomich</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="fs-5 mb-4">Interested in Data-Driven Automation and Analytics to Help Your Business Move Forward</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                                    <button type="button" className="btn btn-outline-light btn-lg px-4">Secondary</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

            </main>

            <footer className={styles.footer}>
            </footer>
        </>
    )
}