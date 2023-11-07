import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Slider from 'react-slick'
import Feedback from './Feedback'
import FormInfo from './FormInfo'
import {
  BsFillPersonFill,
  BsFillClockFill,
  BsFillPinMapFill
} from 'react-icons/bs'
import ImageA from '../ComponentsInner/Image'

const KhoaHocScreen = ({ className, ...props }) => {
  const { bokhoahoc, khoahoc } = props

  const { danh_gia, loi_gioi_thieu } = khoahoc?.data?.attributes
  const { data } = bokhoahoc

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  }

  return (
    <LayoutPage>
      <div className={cn(styles.khoahoc, className, 'mb-5 pb-5')}>
        <div className="container mt-5 pt-5">
          <div className="khoahoc-list mb-5 pb-5">
            <div className='mb-5'dangerouslySetInnerHTML={{ __html: loi_gioi_thieu }} />
            <Row className="g-5">
              {data.slice(0, 3).map((it, index) => {
                const dataInner = it?.attributes
                return (
                 <Col lg={4} key={it.id}>
                 <Link href={`khoahoc/${it.attributes.slug}`} className="list-item">
                   <figure>
                      <ImageA src={dataInner?.thumnail?.data?.attributes?.url}/>
                     <span>{index + 1}</span>
                   </figure>
                   <div className="item-content">
                     <h4 className="mt-4">{dataInner?.tieu_de}</h4>
                     <span className='sub'>{dataInner?.phu_de}</span>
                     <ul className="mt-3">
                       <li>
                         <BsFillPersonFill />
                         <span>{dataInner?.chuc_danh}</span>
                       </li>
                       <li>
                         <BsFillClockFill />
                         <span>{dataInner?.thoi_gian}</span>
                       </li>
                       <li>
                         <BsFillPinMapFill />
                         <span>{dataInner?.dia_diem}</span>
                       </li>
                     </ul>
                   </div>
                 </Link>
               </Col>
                )
              })}
            </Row>
          </div>
          <div className="mt-5 pt-5">
            <FormInfo />
          </div>
          <div className="khoahoc-fb mt-5 pt-5">
            <Slider {...settings}>
              { danh_gia.map((it) => {
                return (
                  <div key={it?.id}>
                  <Feedback data={it} />
                </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default KhoaHocScreen
