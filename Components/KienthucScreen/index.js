import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import HeaderCustom from '../ComponentsInner/HeaderCustom'
import { Col, Row } from 'react-bootstrap'
import CardItem from '../ComponentsInner/CardIteam'
import PhanTich from './PhanTich'
import TitleLine from '../ComponentsInner/TitleLine'
import { first } from 'lodash'

const KienthucScreen = ({ className, ...props }) => {
  console.log('🐳 -> KienthucScreen -> props', props)

  const { phanTichTamly = [], boCoBan, boNangCao, video = [] } = props

  const firstPostId = first(phanTichTamly)?.id
  const firstPostTitle = first(phanTichTamly)?.attributes.tieu_de
  const firstPostDesc = first(phanTichTamly)?.attributes.noi_dung
  const firstPostThumb = first(phanTichTamly)?.attributes.thumnail.data.attributes.url

  return (
    <LayoutPage title="Kiến thức">
      <div className={cn(styles.kienthuc, className, 'mb-5 pb-5')}>
        <div className="container mt-5 pt-5">
          <HeaderCustom>PHÂN TÍCH TÂM LÝ</HeaderCustom>
          <div className="mt-5 pt-5">
            <Row className="g-5">
              <Col md={5}>
                <CardItem
                  className="card-news"
                  isNews
                  link={`/bai-viet/phan-tich-tam-ly/${firstPostId}`}
                  src={firstPostThumb}
                  title={firstPostTitle}
                  des={firstPostDesc?.length > 200 ? firstPostDesc.slice(0, 200) + '...' : firstPostDesc}
                />
              </Col>
              <Col md={7}>
                <Row className="g-5">
                  {phanTichTamly.slice(1).map(post => {
                    return (
                      <Col md={6} key={post.attributes.tieu_de}>
                        <CardItem
                          className="card-news"
                          link={`/bai-viet/phan-tich-tam-ly/${post.attributes.slug}`}
                          title={post.attributes.tieu_de}
                          src={post.attributes.thumnail?.data?.attributes.url}
                        />
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </div>
          <section>
            <div className='p-5 m-5'>
              <HeaderCustom>PHÂN TÍCH KỸ THUẬT</HeaderCustom>
            </div>
            <PhanTich posts={boCoBan} cat="bo-co-ban"/>
            <PhanTich title='Bộ nâng cao' posts={boNangCao} cat="bo-nang-cao" />
          </section>
          <section className='hoc-tap'>
            <TitleLine className={'mb-5'} title={'Video học tập'} />
            <Row className="g-5">
              {video?.map(v => {
                const formatUrl = v.attributes.url.split('watch?v=')[1]
                const renderUrl = formatUrl ? `https://www.youtube.com/embed/${formatUrl}` : v.attributes.url
                return <Col md={4} key={Math.random()}>
                  <iframe width="100%" height="315" src={renderUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Col>
              })}

            </Row>

          </section>
        </div>
      </div>
    </LayoutPage>
  )
}

export default KienthucScreen
