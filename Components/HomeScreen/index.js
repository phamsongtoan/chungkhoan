/* eslint-disable no-unused-vars */
import React from 'react'
import cn from 'classnames'
import LayoutPage from '../LayoutPage'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import HeaderCustom from '../ComponentsInner/HeaderCustom'
import CardItem from '../ComponentsInner/CardIteam'
import Image from 'next/image'
import ButtonCustom from '../ComponentsInner/ButtonCustom'
import Link from 'next/link'
import ImageA from '../ComponentsInner/Image'

const HomeScreen = ({ data }) => {
  const {
    subtitle, tieu_de_chinh, banner, list, kien_thuc_image, chung_toi_image, chung_toi, hanh_hanh_phu_de, content_marketing, ve_chung_toi_danh_sach, slogan_dang_ky,
    hinh_nen_dang_ky,
    tin_tucs,
    phan_tich_tam_lies
  } = data.attributes

  return (
    <LayoutPage>
      <div className={cn(styles.homePageScreen)}>
        <div className='banner-home' data-aos="fade-down">
          <figure>
           <ImageA src={banner?.data?.attributes?.url}/>
          </figure>
        </div>
        <div className="content-below">
          <div className="container">
            <div className="gioithieu">
              <div dangerouslySetInnerHTML={{ __html: tieu_de_chinh }}/>
              <p>{subtitle}</p>
            </div>
            <div className="container-gioithieu">
              <Row className="g-4 g-md-5">
                <Col lg={6}>{list?.option1}</Col>
                <Col lg={6}>{list?.option2}</Col>
                <Col lg={6}>{list?.option3}</Col>
                <Col lg={6}>{list?.option4}</Col>
              </Row>
            </div>
            <section className="hoc-tap mt-5 pt-5">
              <HeaderCustom>
                HÀNH TRÌNH HỌC TẬP <br />
                TẠI CHỢ CỔ PHIẾU
              </HeaderCustom>
              <p className="text-center my-5 pt-5 " dangerouslySetInnerHTML={{ __html: hanh_hanh_phu_de }}/>
              <Row className="g-4 g-md-5 row-hoctap">
                {
                  phan_tich_tam_lies.data.map((it, index) => {
                    const dataInner = it.attributes
                    return (
                      <Col lg={4} key={index}>
                        <CardItem
                          src={dataInner.thumnail.data.attributes.url}
                          link={dataInner.slug}
                          className={'custom-card'}
                          title={dataInner.tieu_de}
                          des={dataInner.phu_de}
                        />
                      </Col>
                    )
                  })
                }
              </Row>
            </section>
          </div>
          <section className="mt-5 pt-5 section-kienthuc">
            <div className="container">
              <Row className="g-4 g-md-5 row-hoctap">
                <Col lg={6}>
                  <HeaderCustom
                    className={'mt-5'}
                    sub={
                      <div>
                        KIẾN THỨC <br /> ĐẦU TƯ
                      </div>
                    }
                  >
                    KIẾN THỨC <span className="color-brand">ĐẦU TƯ</span>
                  </HeaderCustom>
                </Col>
                <Col lg={6}>
                 <ImageA src={kien_thuc_image?.data?.attributes?.url}/>
                </Col>
              </Row>
            </div>
            <div className="background-grey"></div>
            <div className="container">
              <div className="row-tintuc">
                <Row className="g-4 g-md-5 ">
                {
                  tin_tucs.data.map((it, index) => {
                    const dataInner = it.attributes
                    return (
                      <Col lg={4} key={index}>
                      <CardItem
                        src={dataInner.thumnail.data.attributes.url}
                        link={dataInner.slug}
                        className={'custom-card'}
                        title={dataInner.tieu_de}
                      />
                    </Col>
                    )
                  })
                }
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
            <section className="text-center my-5 py-5" dangerouslySetInnerHTML={{ __html: content_marketing }}>
            </section>
          </div>

          <section className="text-center mt-5 pt-5 p-5 position-relative">
            <div className="container">
              <div className='mb-5'dangerouslySetInnerHTML={{ __html: slogan_dang_ky }} />
              {/* <h4 className="mb-5">
                Bạn mong muốn trải nghiệm giao dịch hoặc học tập tại chợ cổ
                phiếu và chưa biết liệu nó có <br /> phù hợp với mình hay không?
              </h4> */}
              <Link href={'/khoahoc'}>
                <ButtonCustom className={'uppercase text-16 fw-bold'}>
                  Đăng ký tư vấn
                </ButtonCustom>
              </Link>
            </div>
            <div className="bg-cover">
              <ImageA src={hinh_nen_dang_ky?.data?.attributes?.url}/>
            </div>
          </section>
          <div className="container">
            <section className="about-us pt-5 mt-5">
              <Row className="g-4 g-md-5">

                <Col lg={6}>

                  <div>
                    <HeaderCustom>VỀ CHÚNG TÔI</HeaderCustom>
                    <p className="mt-5 pt-5" dangerouslySetInnerHTML={{ __html: ve_chung_toi_danh_sach }}/>
                    {chung_toi.map((it) => (
                      <div className="mb-5 mt-5" key={it.id}>
                      <h4 className="fw-bold uppercase mb-4">{it.title}</h4>
                      <p className="text-justify">
                       {it.subTitle}
                      </p>
                    </div>
                    ))}
                  </div>
                </Col>
                <Col lg={6}>
                    <ImageA src={chung_toi_image?.data?.attributes?.url}/>
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
