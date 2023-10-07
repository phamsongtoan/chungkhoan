import React from 'react'
import KhoahocDetailScreen from '../../Components/KhoahocDetailScreen'
import { api } from '../../libs/api'

export const getServerSideProps = async (context) => {
  const { data: { data } } = await api.get(`/bo-khoa-hocs?filters[slug][$eq]=${context.params.id}&populate=deep,10`)
  return {
    props: {
      data: data[0]
    }
  }
}

export default function KhoahocDetail (props) {
  return (
    <KhoahocDetailScreen {...props}/>
  )
}
