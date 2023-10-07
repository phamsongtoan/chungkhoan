import React from 'react'
import KienthucScreen from '../Components/KienthucScreen'
import { api } from '../libs/api'

const kienthuc = (props) => {
  return (
    <KienthucScreen {...props}/>
  )
}

export const getStaticProps = async (context) => {
  try {
    const getPhanTichTamLy = api.get('/phan-tich-tam-lies?populate=*&sort=id:desc&pagination[limit]=5')
    const getBoCoBan = api.get('/bo-co-bans?populate=*&sort=id:desc&pagination[limit]=5')
    const getBoNangCao = api.get('/bo-nang-caos?populate=*&sort=id:desc&pagination[limit]=5')
    const getVideo = api.get('/video-hoc-taps?populate=*&sort=id:desc&pagination[limit]=5')

    const [{ data: { data: phanTichTamly } }, { data: { data: boCoBan } }, { data: { data: boNangCao } },
      {
        data: { data: video }
      }] = await Promise.all([getPhanTichTamLy, getBoCoBan, getBoNangCao, getVideo])
    return {
      props: {
        phanTichTamly,
        boCoBan,
        boNangCao,
        video
      },
      revalidate: 300
    }
  } catch (e) {
    return {
      redirect: '/'
    }
  }
}

export default kienthuc
