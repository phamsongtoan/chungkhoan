import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import Feedback from './Feedback'
import FormInfo from './FormInfo'
import {
  BsFillPersonFill,
  BsFillClockFill,
  BsFillPinMapFill
} from 'react-icons/bs'

const KhoaHocScreen = ({ className }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <LayoutPage>
      <div className={cn(styles.khoahoc, className, 'mb-5 pb-5')}>
        <div className="container mt-5 pt-5">
          <div className="khoahoc-list mb-5 pb-5">
            <Row className="g-5">
              <Col lg={4}>
                <Link href={'/khoahoc/1'} className="list-item">
                  <figure>
                    <Image src={require('../../assets/ccp/khoahoc2.png')} />
                    <span>2</span>
                  </figure>
                  <div className="item-content">
                    <h4 className="mt-4">Khóa học 2: Chứng khoán ABC</h4>
                    <span>Khám phá chính mình qua công cụ Tâm Lý, DISC</span>
                    <ul className="mt-3">
                      <li>
                        <BsFillPersonFill />
                        <span>Thầy Trần Việt Quân | NKST</span>
                      </li>
                      <li>
                        <BsFillClockFill />
                        <span>25.08.2023</span>
                      </li>
                      <li>
                        <BsFillPinMapFill />
                        <span>Hồ Chí Minh</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </Col>
              <Col lg={4}>
                <Link href={'/khoahoc/1'} className="list-item">
                  <figure>
                    <Image src={require('../../assets/ccp/khoahoc2.png')} />
                    <span>2</span>
                  </figure>
                  <div className="item-content">
                    <h4 className="mt-4">Khóa học 2: Chứng khoán ABC</h4>
                    <span>Khám phá chính mình qua công cụ Tâm Lý, DISC</span>
                    <ul className="mt-3">
                      <li>
                        <BsFillPersonFill />
                        <span>Thầy Trần Việt Quân | NKST</span>
                      </li>
                      <li>
                        <BsFillClockFill />
                        <span>25.08.2023</span>
                      </li>
                      <li>
                        <BsFillPinMapFill />
                        <span>Hồ Chí Minh</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </Col>
              <Col lg={4}>
                <Link href={'/khoahoc/1'} className="list-item">
                  <figure>
                    <Image src={require('../../assets/ccp/khoahoc2.png')} />
                    <span>2</span>
                  </figure>
                  <div className="item-content">
                    <h4 className="mt-4">Khóa học 2: Chứng khoán ABC</h4>
                    <span>Khám phá chính mình qua công cụ Tâm Lý, DISC</span>
                    <ul className="mt-3">
                      <li>
                        <BsFillPersonFill />
                        <span>Thầy Trần Việt Quân | NKST</span>
                      </li>
                      <li>
                        <BsFillClockFill />
                        <span>25.08.2023</span>
                      </li>
                      <li>
                        <BsFillPinMapFill />
                        <span>Hồ Chí Minh</span>
                      </li>
                    </ul>
                  </div>
                </Link>
              </Col>
            </Row>
          </div>
          <div className="mt-5 pt-5">
            <FormInfo />
          </div>
          <div className="khoahoc-fb mt-5 pt-5">
            <Slider {...settings}>
              <div>
                <Feedback />
              </div>
              <div>
                <Feedback />
              </div>
              <div>
                <Feedback />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default KhoaHocScreen
