import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>newt.io | Web Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="newt.io" />
        <p className="description">
          Coming soon. Please inquire at <a href="mailto:alexanderfountain@gmail.com">alexanderfountain@gmail.com</a> for project estimates.
        </p>
      </main>

      <Footer />
    </div>
  )
}
