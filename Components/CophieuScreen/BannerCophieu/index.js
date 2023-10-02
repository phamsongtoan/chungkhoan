import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'

const BannerCophieu = ({ className }) => {
  return (
    <div className={cn(styles.bannerCophieu, className)}>
      <figure className='background-banner'>
        <Image src={require('../../../assets/ccp/bannerkhoahoc.png')} />
        <span></span>
      </figure>
      <div className="khoahoc-content">
        <div className="container h-100">
          <Row className="g-5 h-100">
            <Col lg={6} className='h-100'>
              <div className="content-together h-100">
                <Image src={require('../../../assets/ccp/logoaiaa.png')} />
              </div>
            </Col>
            <Col lg={6} className='h-100'>
              <div className="content-together h-100 text-center">
                <h3 className='fw-bold'>
                  Thương vụ cổ phiếu tháng 6 <br/>
                      cổ phiếu nổi bật
                </h3>

              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default BannerCophieu
