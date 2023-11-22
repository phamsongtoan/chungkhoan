import LayoutPage from '../Components/LayoutPage'
import { api } from '../libs/api'

export const getStaticProps = async () => {
  const { data } = await api.get('/chinh-sach-bao-mat?populate=*')

  return {
    props: data,
    revalidate: 1
  }
}

export default function chinhsachbaomat (props) {
  return (
  <LayoutPage title={'Chính sách bảo mật'}>
    <div className="container py-5">
        <div style={{ minHeight: '80vh' }} dangerouslySetInnerHTML={{ __html: props.data.attributes.noi_dung }}/>
    </div>
  </LayoutPage>
  )
}
