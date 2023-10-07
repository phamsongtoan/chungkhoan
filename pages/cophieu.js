import React from 'react'
import CoPhieuScreen from '../Components/CophieuScreen'
import { api } from '../libs/api'

export const getStaticProps = async () => {
  const { data } = await api.get('/co-phieu?populate=deep,10')

  return {
    props: data,
    revalidate: 1
  }
}

export default function cophieu (props) {
  return (
    <CoPhieuScreen {...props}/>
  )
}
