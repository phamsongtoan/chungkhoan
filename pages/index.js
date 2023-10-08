import HomeScreen from '../Components/HomeScreen'
import { api } from '../libs/api'

export const getStaticProps = async () => {
  const { data } = await api.get('/trang-chu?populate=*')

  return {
    props: data,
    revalidate: 1
  }
}

export default function Home (props) {
  console.log('🐳 -> Home -> props', props)
  return (
   <HomeScreen {...props}/>
  )
}
