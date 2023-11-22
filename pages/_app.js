/* eslint-disable react/no-unknown-property */
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
      const chatbox = document.getElementById('fb-customer-chat'); chatbox.setAttribute('page_id', '110878245283678'); chatbox.setAttribute('attribution', 'biz_inbox')
      // eslint-disable-next-line no-undef, prefer-const
      window.fbAsyncInit = function () { FB.init({ xfbml: true, version: 'v18.0' }) }; (function (d, s, id) { let js; const fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'; fjs.parentNode.insertBefore(js, fjs) }(document, 'script', 'facebook-jssdk'))
    }
  }, [])

  return (
    <>
      <Head>
      <meta name="description" content="Nơi phổ cập đầy đủ kiến thức, thị trường chứng khoán, cổ phiếu"/>

    <link rel="canonical" href="https://chocophieu.org/" />

    <meta property="og:site_name" content="https://chocophieu.org/"/>
    <meta property="og:rich_attachment" content="true"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" itemprop="url" content="https://chocophieu.org/"/>
    <meta property="og:image" itemprop="thumbnailUrl" content="https://apichungkhoang.orokucode.com/uploads/logo_0896f21206.png"/>
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="800"/>
    <meta property="og:image:height" content="354"/>
    <meta content="Chocophieu - Phổ cập kiến thức cổ phiếu" itemprop="headline" property="og:title"/>
    <meta itemprop="description" property="og:description" content="Nơi phổ cập đầy đủ kiến thức, thị trường chứng khoán, cổ phiếu"/>

    <meta name="twitter:card" value="summary"/>
    <meta name="twitter:url" content="https://chocophieu.org//"/>
    <meta name="twitter:title" content="Chocophieu - Phổ cập kiến thức cổ phiếu"/>
    <meta name="twitter:description" content="Nơi phổ cập đầy đủ kiến thức, thị trường chứng khoán, cổ phiếu"/>
    <meta name="twitter:image" content="https://apichungkhoang.orokucode.com/uploads/logo_0896f21206.png"/>

      </Head>
      <AppProvider state={props}>
        <Component {...{ ...pageProps, ...props }} />
        <ToastContainer position="bottom-right"/>
      </AppProvider>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat" theme_color="#ffb700"></div>
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
