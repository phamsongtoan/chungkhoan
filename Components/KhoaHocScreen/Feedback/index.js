import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

const Feedback = ({ className }) => {
  return (
    <div className={cn(styles.feedback, className)}>
      <Row className="g-5">
        <Col lg={6}>
          <Image src={require('../../../assets/ccp/anhdzai.png')} />
        </Col>
        <Col lg={6}>
          <div className="fb-main">
            <ul>
              <li>
                <Image src={require('../../../assets/ccp/star.png')} />
              </li>
              <li>
                <Image src={require('../../../assets/ccp/star.png')} />
              </li>
              <li>
                <Image src={require('../../../assets/ccp/star.png')} />
              </li>
              <li>
                <Image src={require('../../../assets/ccp/star.png')} />
              </li>
              <li>
                <Image src={require('../../../assets/ccp/star.png')} />
              </li>
            </ul>
            <div className="fb-talk">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                obcaecati, harum id perspiciatis laboriosam quod eligendi, porro
                quas excepturi quaerat commodi. Numquam, neque magnam quia
                beatae obcaecati dicta nam quibusdam!
              </p>
              <span>Nathan Lee</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Feedback
