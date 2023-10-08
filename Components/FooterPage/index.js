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
  console.log('🐳 -> FooterPage -> footer', footer)

  const { facebook, hotline, logo, twitter, youtube } = footer.data.attributes

  return (
    <div data-aos="fade-up" className={cn(styles.footerPage, 'pt-5 mt-5')}>
      <div className="container">
        <Row className="g-4">
          <Col lg={3}>
            <div className="logo-footer">CCP</div>
          </Col>
          <Col lg={3}>
            <ul>
              <li>
                <h4>
                  <Link href={''}>Điều khoản sử dụng</Link>
                </h4>
              </li>
              <li>
                <h4>
                  <Link href={''}>Chính sách bảo mật</Link>
                </h4>
              </li>
              <li>
                <h4>
                  <Link href={''}>Liên hệ</Link>
                </h4>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <ul>
              <li>
                <h4>
                  <Link href={''}>Tin tức mới</Link>
                </h4>
              </li>
              <li>
                <h4>
                  <Link href={''}>Phân tích kỹ thuật</Link>
                </h4>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <div>
              <h5 className='mb-4'>KẾT NỐI VỚI CHÚNG TÔI</h5>
              <ul className='social'>
                <li>
                  <AiFillFacebook />
                </li>
                <li>
                  <AiOutlineTwitter />
                </li>
                <li>
                  <AiFillYoutube />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default FooterPage
