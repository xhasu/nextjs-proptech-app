
import Head from 'next/head'
import MainLayout from 'components/layouts/main'
import 'styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
