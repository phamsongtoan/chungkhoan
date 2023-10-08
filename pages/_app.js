import { ToastContainer } from 'react-toastify'
import AOS from 'aos'

import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-gallery/styles/css/image-gallery.css'
import 'react-image-lightbox/style.css'
import { useEffect } from 'react'
import { api } from '../libs/api'
import { AppProvider } from '../Context/AppContext'

function MyApp ({ Component, pageProps, ...props }) {
  console.log('🐳 -> MyApp -> props', props)
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      duration: 800
    })
  }, [])

  return (
    <AppProvider state={props}>
      <Component {...{ ...pageProps, ...props }} />
      <ToastContainer position="bottom-right"/>
    </AppProvider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  const { data: config } = await api.get('/cau-hinh?populate=*')
  return {
    props: {
      config
    }
  }
}

export default MyApp
