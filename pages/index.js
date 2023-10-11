import HomeScreen from '../Components/HomeScreen'
import { api } from '../libs/api'

export const getStaticProps = async () => {
  const { data } = await api.get('/trang-chu?populate=deep,10')

  return {
    props: data,
    revalidate: 1
  }
}

export default function Home (props) {
  console.log('🐳 -> Home -> props 11111', props)
  return (
   <HomeScreen {...props}/>
  )
}
