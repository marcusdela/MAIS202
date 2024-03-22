import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>stockr.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="stockr.ai" />
        <p className="description">
          S&P500 speculation made easy <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
