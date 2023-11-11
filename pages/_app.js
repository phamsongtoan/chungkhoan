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
import Head from 'next/head'
import Script from 'next/script'

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const chatbox = document.getElementById('fb-customer-chat'); chatbox.setAttribute('page_id', '184672791387473'); chatbox.setAttribute('attribution', 'biz_inbox')
      window.fbAsyncInit = function () { FB.init({ xfbml: true, version: 'v18.0' }) }; (function (d, s, id) { let js; const fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'; fjs.parentNode.insertBefore(js, fjs) }(document, 'script', 'facebook-jssdk'))
    }
  }, [])

  return (
    <>

      <AppProvider state={props}>
        <Component {...{ ...pageProps, ...props }} />
        <ToastContainer position="bottom-right"/>
      </AppProvider>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>

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
