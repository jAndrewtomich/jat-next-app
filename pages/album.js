import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Image from 'next/image'
import Netflix from '../public/images/netflix.jpg'
import Cifar10 from '../public/images/cifar10.webp'

import Container from 'react-bootstrap/Container'



export default function Home() {
    return (
        <>
            <Head>
                <title>Andrew's Work</title>
            </Head>

            <main className={ styles.albummain }>

                <Container fluid>
                    <div className="row align-items-center g-5 py-5 bg-dark text-white">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <Image src={ Netflix } className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">Exploratory Data Analysis</h1>
                            <p className="lead">Netflix was long a Titan in the Streaming Entertainment industry, and still holds a dominant market position.
                                Which years saw the most popular shows added or created?  Can we infer antyihng about Netflix's motivations for the content they chose to add
                                in a particular year?  Is there steady progression in one direction, or is variety a more prevalent preference?
                                These are just some of the questions we explore in this in-depth analysis of the Netflix database.  Moreover, the Netflix
                                database is joined with IMDb in order to obtain a representation for user rating.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a type="link" href="/eda" className="btn btn-primary btn-lg px-4 me-md-2">Results</a>
                                <a type="button" className="btn btn-outline-secondary btn-lg px-4">Source</a>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container fluid>
                    <div className="row align-items-center g-5 py-5 bg-dark text-white">
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3 text-white">ML for Image Classification</h1>
                            <p className="lead">The ability for neural networks to accurately classify and identify images has come a long way, due in large part to the
                            widespread adoption of the convolutional neural network for this task.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a type="link" href="/eda" className="btn btn-primary btn-lg px-4 me-md-2">Results</a>
                                <a type="button" className="btn btn-outline-secondary btn-lg px-4">Source</a>
                            </div>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-6">
                            <Image src={ Cifar10 } className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                    </div>
                </Container>
                <div className="b-example-divider"></div>
            </main>

            <footer className={styles.footer}>
            </footer>

        </>
    )
}