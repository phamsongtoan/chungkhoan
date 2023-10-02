import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import TitleLine from '../ComponentsInner/TitleLine'
import { Col, Row } from 'react-bootstrap'
import NewsItem from '../ComponentsInner/NewsItem'
import Image from 'next/image'
import CardItem from '../ComponentsInner/CardIteam'
import ItemRelative from '../ComponentsInner/ItemRelative'

const NewsDetailScreen = ({ className }) => {
  return (
    <LayoutPage>
      <div className={cn(styles.newsDetail, className, 'mb-5 pb-5')}>
        <div className="container pt-5">
          <div className="title">
            <TitleLine title={'Tin tức tài chính'} />
          </div>
          <Row className='mt-4 mb-4'>
            <Col className='col-lg-8'>
              <div className="news-heading">
                <h3 className="fw-bold">
                  Chứng khoán Mỹ giảm, Cuộc chiến chống lạm phát đang diễn ra
                </h3>
                <span className="text-secondpage text-date">
                  Ngày đăng 21/06/2023 20:58
                </span>
              </div>
            </Col>
          </Row>
          <Row className=' g-5'>
            <Col className='col-lg-8'>
              <div className='news-content'>
                  <Image src={require('../../assets/projects/banan.jpeg')} />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit officiis id doloremque consequuntur, iure quia ipsam necessitatibus. Obcaecati tempore dolore aliquid, illo rem vitae minima veniam sit neque sequi.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat odit officiis id doloremque consequuntur, iure quia ipsam necessitatibus. Obcaecati tempore dolore aliquid, illo rem vitae minima veniam sit neque sequi.
                  </p>
              </div>
            </Col>
            <Col className='col-lg-4'>
              <div>
                  <TitleLine className={'mb-4'} title={'Các bài nổi bật'} />
                  <div className='list-relative'>
                   <NewsItem/>
                   <NewsItem/>
                   <NewsItem/>
                  </div>
              </div>
            </Col>
          </Row>
          {/* <ItemRelative className={'pt-5 mt-5'}/> */}
        </div>
      </div>
    </LayoutPage>
  )
}

export default NewsDetailScreen
