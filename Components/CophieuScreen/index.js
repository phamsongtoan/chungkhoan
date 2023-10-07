/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import HeaderCustom from '../ComponentsInner/HeaderCustom'
import { Col, Row } from 'react-bootstrap'
import BannerCophieu from './BannerCophieu'
import ImageA from '../ComponentsInner/Image'

const CoPhieuScreen = ({ className, data }) => {
  const { bang_co_phieu, chu_noi_bat, hinh_copytrade, hinh_nen, logo_noi_bat, quy_dau_tu_gioi_thieu, quy_dau_tu_hinh } = data.attributes

  console.log(data, 'data')

  const tableData = bang_co_phieu.map((item) => {
    return {
      logo: item?.logo_cong_ty?.data?.attributes?.url,
      ky_tu: item.ky_tu,
      cong_ty: item.cong_ty
    }
  })

  const contentBanner = { hinhnen: hinh_nen.data.attributes.url, logo: logo_noi_bat.data.attributes.url, chu: chu_noi_bat }
  return (
    <LayoutPage>
      <div className={cn(styles.khoahoc, className, 'mb-5 pb-5')}>
       <BannerCophieu data={contentBanner} />
        <div className="container">
          <section className="macophieu mt-5 pt-5">
            <div className='mb-5 pb-5'>
              <HeaderCustom>DANH SÁCH CÁC MÃ CỔ PHIẾU</HeaderCustom>
            </div>
            <div className="div-table">
              <table className='w-100'>
                <tr>
                  <th style={{ width: 30 }}></th>
                  <th style={{ width: 30 }}></th>
                  <th style={{ width: 40 }}></th>
                </tr>
                {tableData.map((it, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <figure>
                          <ImageA src={it?.logo}/>
                        </figure>
                      </td>
                      <td className='text-center'>
                        <span className='text-uppercase table-symbol'>{it?.ky_tu}</span>
                      </td>
                      <td>
                        <div className='table-name'>
                          {it?.cong_ty}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </table>
            </div>
          </section>

          <section className='copy-trade pt-5 mt-5'>
            <div className='mb-5 pb-5'>
                <HeaderCustom>COPYTRADE</HeaderCustom>
                <figure className='mt-5 pt-5'>
                  <ImageA src={hinh_copytrade?.data?.attributes?.url}/>
                </figure>
            </div>
          </section>
          <section className='quy-dau-tu'>
            <div className='mb-5 pb-5'>
                <HeaderCustom>QUỸ ĐẦU TƯ</HeaderCustom>
            </div>
            <Row className="g-5">
                <Col lg={6}>
                  <p>
                    {quy_dau_tu_gioi_thieu}
                  </p>
                </Col>
                <Col lg={6}>
                  <ImageA src={quy_dau_tu_hinh?.data?.attributes?.url}/>
                </Col>
              </Row>
          </section>
        </div>
      </div>
    </LayoutPage>
  )
}

export default CoPhieuScreen
