import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import ImageA from '../../ComponentsInner/Image'

const BannerCophieu = ({ className, data }) => {
  const { hinhnen, chu, logo } = data
  return (
    <div className={cn(styles.bannerCophieu, className)}>
      <figure className='background-banner'>
      <ImageA src={hinhnen}/>
        <span></span>
      </figure>
      <div className="khoahoc-content">
        <div className="container h-100">
          <Row className="g-5 h-100">
            <Col lg={6} className=''>
              <div className="content-together ">
                <ImageA src={logo}/>
              </div>
            </Col>
            <Col lg={6} className=''>
              <div className="content-together  text-center">
                <h3 className='fw-bold' dangerouslySetInnerHTML={{ __html: chu }} />
                  {/* Thương vụ cổ phiếu tháng 6 <br/>
                      cổ phiếu nổi bật */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default BannerCophieu
