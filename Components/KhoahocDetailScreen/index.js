import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import ButtonCustom from '../ComponentsInner/ButtonCustom'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import ItemRelative from '../ComponentsInner/ItemRelative'
import FormInfo from '../KhoaHocScreen/FormInfo'

const KhoahocDetailScreen = ({ className }) => {
  return (
    <LayoutPage>
      <div className={cn(styles.khoahocDetail, className, 'mb-5 pb-5')}>
        <div className="banner-kh">
          <div className="banner-img">
            <Image src={require('../../assets/projects/banan.jpeg')} />
          </div>
          <div className="banner-content">
            <div className="container">
              <Row>
                <Col className="col-lg-6"></Col>
                <Col className="col-lg-6">
                  <div className="content-inner">
                    <h2 className="text-brand text-uppercase">
                      NGHỆ THUẬT LÀM VIỆC TRONG HẠNH PHÚC
                    </h2>
                    <p className="mb-5 mt-5">
                      Khoá học miễn phí, trao giá trị cộng đồng Dành cho cá nhân
                      và đội ngũ cùng học và thực hành ONLINE liên tục 3 buổi
                      tối qua ZOOM từ 19h45 - 22h00
                    </p>
                    <div className="d-flex justify-content-center">
                      <ButtonCustom className={'button-primary'}>
                        ĐĂNG KÝ NGAY
                      </ButtonCustom>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="kh-des mt-5 pt-5">
            <h2 className="text-center mb-5">BẠN ĐANG ĐAU ĐẦU, MỆT MỎI</h2>
            <Row className="g-5">
              <Col className="col-lg-4">
                <div className="content-bad">
                  <h4 className="fw-bold mb-3">Bạn đang đau đầu, mệt mỏi</h4>
                  <ul>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                  </ul>
                </div>
              </Col>
              <Col className="col-lg-4">
                <div className="content-bad">
                  <h4 className="fw-bold mb-3">Bạn đang đau đầu, mệt mỏi</h4>
                  <ul>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                  </ul>
                </div>
              </Col>
              <Col className="col-lg-4">
                <div className="content-bad">
                  <h4 className="fw-bold mb-3">Bạn đang đau đầu, mệt mỏi</h4>
                  <ul>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                    <li>Doanh thu Dậm chân tại chỗ, chậm tăng trương</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <div className="kh-target mt-5 pt-5">
          <div className="container">
            <h2 className="text-center mb-5">ĐIỀU BẠN MUỐN ĐẠT ĐƯỢC</h2>
          </div>
          <div className="target-content">
            <Image src={require('../../assets/projects/banan.jpeg')} />
            <span></span>
            <div className="container">
              <div className="content-main">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem dignissimos a maxime vitae itaque voluptates quia
                  dolores enim labore in harum explicabo quibusdam, qui illo at
                  minima ipsum est aperiam?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, assumenda aliquam? Odit, placeat sed nobis commodi
                  quidem minima tempora a quibusdam quasi, cupiditate enim
                  reiciendis velit laudantium unde. Modi, provident.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div className="mt-5 pt-5">
            <ItemRelative />
          </div> */}
          <div className="mt-5 pt-5">
            <FormInfo />
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default KhoahocDetailScreen
