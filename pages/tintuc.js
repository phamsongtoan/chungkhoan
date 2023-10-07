import React from 'react'
import TintucScreen from '../Components/Tintuc'
import { api } from '../libs/api'

const tintuc = (props) => {
  return (
    <TintucScreen {...props}/>
  )
}

export const getStaticProps = async (context) => {
  try {
    const { data: posts } = await api.get('/tin-tucs?populate=*&sort=id:desc&pagination[page]=1&pagination[pageSize]=10')

    return {
      props: {
        posts
      },
      revalidate: 300
    }
  } catch (e) {
    return {
      redirect: '/'
    }
  }
}

export default tintuc
