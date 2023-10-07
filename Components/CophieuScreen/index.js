/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import LayoutPage from '../LayoutPage'
import HeaderCustom from '../ComponentsInner/HeaderCustom'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import BannerCophieu from './BannerCophieu'

const tableData = [...Array(10)].fill(1).map((item) => {
  return {
    logo: '',
    symbol: 'AIA',
    name: 'AIA Group Ltd'
  }
})

const CoPhieuScreen = ({ className }) => {
  return (
    <LayoutPage>
      <div className={cn(styles.khoahoc, className, 'mb-5 pb-5')}>
       <BannerCophieu/>
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
                          <Image src={it?.logo || require('../../assets/ccp/logoaiaa.png')} />
                        </figure>
                      </td>
                      <td className='text-center'>
                        <span className='text-uppercase table-symbol'>{it?.symbol}</span>
                      </td>
                      <td>
                        <div className='table-name'>
                          {it?.name}
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
            </div>
          </section>
          <section className='quy-dau-tu'>
            <div className='mb-5 pb-5'>
                <HeaderCustom>QUỸ ĐẦU TƯ</HeaderCustom>
            </div>
            <Row className="g-5">
                <Col lg={6}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                  </p>
                </Col>
                <Col lg={6}>
                   <Image src={require('../../assets/ccp/business.png')} />
                </Col>
              </Row>
          </section>
        </div>
      </div>
    </LayoutPage>
  )
}

export default CoPhieuScreen
