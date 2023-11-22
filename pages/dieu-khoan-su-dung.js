import LayoutPage from '../Components/LayoutPage'
import { api } from '../libs/api'

export const getStaticProps = async () => {
  const { data } = await api.get('/dieu-khoan-su-dung?populate=*')

  return {
    props: data,
    revalidate: 1
  }
}

export default function dieukhoansudung (props) {
  return (
  <LayoutPage title={'Điều khoản sử dụng'}>
    <div className="container py-5">
        <div style={{ minHeight: '80vh' }} className='dieukhoansudung' dangerouslySetInnerHTML={{ __html: props.data.attributes.noi_dung }}/>
    </div>
  </LayoutPage>
  )
}
