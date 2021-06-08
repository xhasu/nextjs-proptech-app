
import MainLayout from 'components/layouts/main'
import 'styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
