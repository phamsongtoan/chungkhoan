import HomeScreen from '../Components/HomeScreen'
import { api } from '../libs/api'
import { request } from '../libs/dato'

export const getStaticProps = async () => {
  const { data } = await api.get('/trang-chu?populate=*')

  return {
    props: data,
    revalidate: 1
  }
}

export default function Home (props) {
  return (
   <HomeScreen {...props}/>
  )
}
