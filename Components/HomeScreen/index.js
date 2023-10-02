import React from 'react'
import BannerHome from './BannerHome'
import cn from 'classnames'
import LayoutPage from '../LayoutPage'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import HeaderCustom from '../ComponentsInner/HeaderCustom'
import CardItem from '../ComponentsInner/CardIteam'
import Image from 'next/image'
import ButtonCustom from '../ComponentsInner/ButtonCustom'
import Link from 'next/link'

const HomeScreen = ({ data }) => {
  const { subtitle, number_total } = data.attributes
  console.log('🚀 ~ file: index.js:15 ~ HomeScreen ~ data.attributes:', data.attributes)
  return (
    <LayoutPage>
      <div className={cn(styles.homePageScreen)}>
        <BannerHome />
        <div className="content-below">
          <div className="container">
            <div className="gioithieu">
              <h2>
                1 tài khoản <span className="color-brand">{number_total}+ </span>sản
                phẩm
              </h2>
              <p>
                {subtitle}
              </p>
            </div>
            <div className="container-gioithieu">
              <Row className="g-5">
                <Col lg={6}>Tự học cổ phiếu Online</Col>
                <Col lg={6}>Phân tích chi tiết các công ty</Col>
                <Col lg={6}>Chia sẻ cố phiếu tăng trưởng tốt mỗi tháng</Col>
                <Col lg={6}>Mổ hình giao dịch và các công cụ nâng cao</Col>
              </Row>
            </div>
            <section className="hoc-tap mt-5 pt-5">
              <HeaderCustom>
                HÀNH TRÌNH HỌC TẬP <br />
                TẠI CHỢ CỔ PHIẾU
              </HeaderCustom>
              <p className="text-center my-5 pt-5 ">
                Hành trình học tập tại Chợ Cổ Phiếu <br />
                là sự kết hợp giữa khoa học & đào học dựa trên nền tảng
              </p>
              <Row className="g-5 row-hoctap">
                <Col lg={4}>
                  <CardItem link={'/khoahoc/hanhtrinh3goc'} className={'custom-card'} title={'HÀNH TRÌNH 3 GỐC'} des={'Cốt lõi nhất, nền tảng phát triển bền vững'} />
                </Col>
                <Col lg={4}>
                  <CardItem link={'/khoahoc/timhieubanthan'} className={'custom-card'} title={'THẤU HIÊU BẢN THÂN'} des={'Cốt lõi nhất, nền tảng phát triển bền vững'} />
                </Col>
                <Col lg={4}>
                  <CardItem link={'/khoahoc/daycon3goc'} className={'custom-card'} title={'DẠY CON 3 GỐC'} des={'Cốt lõi nhất, nền tảng phát triển bền vững'} />
                </Col>
              </Row>
            </section>
          </div>
          <section className="mt-5 pt-5 section-kienthuc">
            <div className="container">
              <Row className="g-5 row-hoctap">
                <Col lg={6}>
                  <HeaderCustom className={'mt-5'} sub={<div>
                    KIẾN THỨC <br/> ĐẦU TƯ
                  </div>}>
                    KIẾN THỨC <span className="color-brand">ĐẦU TƯ</span>
                  </HeaderCustom>
                </Col>
                <Col lg={6}>
                  <Image src={require('../../assets/ccp/kienthuc.png')} />
                </Col>
              </Row>
            </div>
            <div className="background-grey"></div>
            <div className="container">
              <div className="row-tintuc">
                <Row className="g-5 ">
                  <Col lg={4}>
                    <CardItem link={'tintuc/1'} className={'card-dautu'} des={'Tips on How to Buy Essay Online the Correct Way'} />
                  </Col>
                  <Col lg={4}>
                    <CardItem link={'tintuc/1'} className={'card-dautu'} des={'Internet Data Space Software'}/>
                  </Col>
                  <Col lg={4}>
                    <CardItem link={'tintuc/1'} className={'card-dautu'} des={'VDR Software For people who do buiness'}/>
                  </Col>
                </Row>
                <div className="mt-5 button-seemore">
                  <Link href={'/kienthuc'}>
                  <ButtonCustom>Xem thêm</ButtonCustom>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <section className="text-center my-5 py-5">
              <h4>Trải nghiệm cùng chúng tôi</h4>
              <p>
                Quý khách có thể tin tưởng để chúng tôi mang đến cho <br /> bạn
                trải nghiệm chưa đủ từng có.
              </p>
            </section>
          </div>

          <section className="text-center mt-5 pt-5 p-5 position-relative">
            <div className="container">
              <h4 className="mb-5">
                Bạn mong muốn trải nghiệm giao dịch hoặc học tập tại chợ cổ
                phiếu và chưa biết liệu nó có <br /> phù hợp với mình hay không?
              </h4>
              <ButtonCustom className={'uppercase text-16 fw-bold'}>
                Đăng ký tư vấn
              </ButtonCustom>
            </div>
            <div className="bg-cover">
              <Image src={require('../../assets/ccp/bannerfirst.png')} />
            </div>
          </section>
          <div className="container">
            <section className="about-us pt-5 mt-5">
              <Row className="g-5">
                <Col lg={6}>
                  <div>
                    <HeaderCustom>VỀ CHÚNG TÔI</HeaderCustom>
                    <ul className="mt-5 pt-5">
                      <li>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text.
                      </li>
                      <li>
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College
                      </li>
                      <li>
                        Many desktop publishing packages and web page editors
                        now
                      </li>
                      <li>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </li>
                    </ul>
                    <div className="mb-5 mt-5">
                      <h4 className="fw-bold uppercase mb-4">Tầm nhìn</h4>
                      <p className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                    <div>
                      <h4 className="fw-bold uppercase mb-4">SỨ MỆNH</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <Image src={require('../../assets/ccp/Rectangle.png')} />
                </Col>
              </Row>
            </section>
          </div>
        </div>
      </div>
    </LayoutPage>
  )
}

export default HomeScreen
