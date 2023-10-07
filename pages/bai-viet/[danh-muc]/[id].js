import React from 'react'
import NewsDetailScreen from '../../../Components/NewsDetailScreen'
import { api } from '../../../libs/api'

const NewsDetail = (props) => {
  return (
    <NewsDetailScreen {...props}/>
  )
}

export const getStaticPaths = async () => {
  const { data: result } = await api.get('tin-tucs')
  return {
    paths: result.data.map(result => ({
      params: { id: result.id.toString(), 'danh-muc': 'tin-tuc' }
    })),
    fallback: true
  }
}

export const getStaticProps = async context => {
  const params = context.params

  const danhMuc = params['danh-muc']
  const id = params.id

  const { data: { data: post } } = await api.get(`${danhMuc}s/${id}?populate=*`)
  const { data: { data: relative } } = await api.get(`${danhMuc}s?populate=*&pagination[limit]=5`)

  return {
    props: {
      post,
      relative
    },
    revalidate: 300
  }
}

export default NewsDetail
