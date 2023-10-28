import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter
} from 'react-icons/ai'
import { useAppContext } from '../../Context/AppContext'

const FooterPage = () => {
  const { footer } = useAppContext()

  const { facebook, hotline, twitter, youtube } = footer.data.attributes

  return (
    <div className={cn(styles.footerPage, 'pt-5 mt-5')}>
      <div className="container">
        <Row className="g-4">
          <Col lg={3}>
            <div className="logo-footer">CCP</div>
          </Col>
          <Col lg={3}>
            <ul>
              <li>
                <h4>
                  <Link href={'/dieu-khoan-su-dung'}>Điều khoản sử dụng</Link>
                </h4>
              </li>
              <li>
                <h4>
                  <Link href={'/chinh-sach-bao-mat'}>Chính sách bảo mật</Link>
                </h4>
              </li>
              <li>
                <h4>
                  <a href={`tel:${hotline}`}>Liên hệ</a>
                </h4>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul>
              <li>
                <h4>
                  <Link href={'/tintuc'}>Tin tức mới</Link>
                </h4>
              </li>
              <li>
                <h4>
                  <Link href={'/kienthuc'}>Phân tích kỹ thuật</Link>
                </h4>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div>
              <h5 className='mb-4'>KẾT NỐI VỚI CHÚNG TÔI</h5>
              <ul className='social'>
                {facebook && <li>
                  <a href={facebook} target="_blank" rel="noreferrer" >
                    <AiFillFacebook />
                  </a>
                </li>}

                {twitter && <li>
                <a href={twitter} target="_blank" rel="noreferrer" >
                  <AiOutlineTwitter />
                </a>
                </li>}
                {
                  youtube && <li>
                  <a href={youtube} target="_blank" rel="noreferrer" >
                    <AiFillYoutube />
                  </a>
                  </li>
                }
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FooterPage
