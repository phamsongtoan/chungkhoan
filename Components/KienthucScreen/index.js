import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import HeaderCustom from '../ComponentsInner/HeaderCustom'
import { Col, Row } from 'react-bootstrap'
import CardItem from '../ComponentsInner/CardIteam'
import PhanTich from './PhanTich'
import TitleLine from '../ComponentsInner/TitleLine'

const KienthucScreen = ({ className }) => {
  return (
    <LayoutPage>
      <div className={cn(styles.kienthuc, className, 'mb-5 pb-5')}>
        <div className="container mt-5 pt-5">
          <HeaderCustom>PHÂN TÍCH TÂM LÝ</HeaderCustom>
          <div className="mt-5 pt-5">
            <Row className="g-5">
              <Col md={5}>
                <CardItem
                  className="card-news"
                  isNews
                  title={'THẤU HIÊU BẢN THÂN'}
                  des={
                    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                  }
                />
              </Col>
              <Col md={7}>
                <Row className="g-5">
                  <Col md={6}>
                    <CardItem
                      className="card-news"
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <CardItem
                      className="card-news"
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <CardItem
                      className="card-news"
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <CardItem
                      className="card-news"
                      title={
                        'There are many variations of passages of Lorem Ipsum available'
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <section>
            <div className='p-5 m-5'>
              <HeaderCustom>PHÂN TÍCH KỸ THUẬT</HeaderCustom>
            </div>
            <PhanTich />
            <PhanTich title='Bộ nâng cao' />
          </section>
          <section className='hoc-tap'>
            <TitleLine className={'mb-5'} title={'Video học tập'}/>
            <Row className="g-5">
                  <Col md={4}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JisujIs8Eug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Col>
                  <Col md={4}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JisujIs8Eug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Col>
                  <Col md={4}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/JisujIs8Eug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Col>
                </Row>

          </section>
        </div>
      </div>
    </LayoutPage>
  )
}

export default KienthucScreen
