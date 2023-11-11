import React from 'react'
import KhoaHocScreen from '../Components/KhoaHocScreen'
import { api } from '../libs/api'

export const getStaticProps = async () => {
  const { data } = await api.get('/khoa-hoc?populate=deep,10')
  const { data: bokhoahoc } = await api.get('/bo-khoa-hocs?populate=*&sort=id:desc&pagination[limit]=6')

  return {
    props: {
      khoahoc: data,
      bokhoahoc
    },
    revalidate: 1
  }
}

export default function khoahoc (props) {
  return (
    <KhoaHocScreen {...props}/>
  )
}

// export const getStaticProps = async (context) => {
//   try {
//     const getPhanTichTamLy = api.get('/phan-tich-tam-lies?populate=*&sort=id:desc&pagination[limit]=5')
//     const getBoCoBan = api.get('/bo-co-bans?populate=*&sort=id:desc&pagination[limit]=5')
//     const getBoNangCao = api.get('/bo-nang-caos?populate=*&sort=id:desc&pagination[limit]=5')
//     const getVideo = api.get('/video-hoc-taps?populate=*&sort=id:desc&pagination[limit]=5')

//     const [{ data: { data: phanTichTamly } }, { data: { data: boCoBan } }, { data: { data: boNangCao } },
//       {
//         data: { data: video }
//       }] = await Promise.all([getPhanTichTamLy, getBoCoBan, getBoNangCao, getVideo])
//     return {
//       props: {
//         phanTichTamly,
//         boCoBan,
//         boNangCao,
//         video
//       },
//       revalidate: 300
//     }
//   } catch (e) {
//     return {
//       redirect: '/'
//     }
//   }
// }
