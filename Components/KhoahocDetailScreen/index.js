import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import ButtonCustom from '../ComponentsInner/ButtonCustom'
import { Col, Row } from 'react-bootstrap'
import FormInfo from '../KhoaHocScreen/FormInfo'
import ImageA from '../ComponentsInner/Image'

const KhoahocDetailScreen = ({ className, data }) => {
  console.log(data, 'data?.attributes')

  const { tieu_de, thumnail, phu_de_trong, noi_dung_chuyen_muc_2, chuyen_muc_1, chuyen_muc_2, anh_chuyen_muc_2 } = data?.attributes
  return (
    <LayoutPage>
      <div className={cn(styles.khoahocDetail, className, 'mb-5 pb-5')}>
        <div className="banner-kh">
          <div className="banner-img">
            <ImageA src={thumnail?.data?.attributes?.url}/>
          </div>
          <div className="banner-content">
            <div className="container">
              <Row>
                <Col className="col-lg-6 col-12"></Col>
                <Col className="col-lg-6 col-12">
                  <div className="content-inner">
                    <h2 className="text-brand text-uppercase">
                        {tieu_de}
                    </h2>
                    <p className="mb-5 mt-5">
                      {phu_de_trong}
                    </p>
                    <a href={'#confirm'} className="d-flex justify-content-center">
                      <ButtonCustom className={'button-primary'}>
                        ĐĂNG KÝ NGAY
                      </ButtonCustom>
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="kh-des mt-5 pt-5">
            <h2 className="text-center mb-5">{chuyen_muc_1?.tieu_de}</h2>
            <Row className="g-5">
              {chuyen_muc_1?.muc_con.map(it => (
                <Col className="col-lg-4" key={it.id}>
                <div className="content-bad">
                  <h4 className="fw-bold mb-3">{it.tieu_de}</h4>
                  <ul>
                    <li>{it.noi_dung}</li>
                    <li>{it.noi_dung_2}</li>
                    <li>{it.noi_dung_3}</li>
                  </ul>
                </div>
              </Col>
              ))}
            </Row>
          </div>
        </div>

        <div className="kh-target mt-5 pt-5">
          <div className="container">
            <h2 className="text-center mb-5">{chuyen_muc_2}</h2>
          </div>
          <div className="target-content">
            <ImageA src={anh_chuyen_muc_2?.data?.attributes?.url}/>
            <span></span>
            <div className="container">
              <div className="content-main" dangerouslySetInnerHTML={{ __html: noi_dung_chuyen_muc_2 }}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mt-5 pt-5" id='confirm'>
            <FormInfo />
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default KhoahocDetailScreen
