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

function MyApp ({ Component, pageProps, ...props }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
      duration: 800
    })
  }, [])
  return (
    <>
      <Component {...{ ...pageProps, ...props }} />
      <ToastContainer position="bottom-right"/>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  return {
  }
}

export default MyApp
