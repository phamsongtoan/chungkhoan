import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import ImageA from '../../ComponentsInner/Image'

const Feedback = ({ className, data }) => {
  console.log(data, 'data11111')
  const { feedback, hinh_nguoi, sao, tac_gia } = data

  console.log(hinh_nguoi, 'hinh_nguoi')
  const formatData = [...Array(sao)].fill(1).map((item, index) => {
    return {
      key: index
    }
  })

  return (
    <div className={cn(styles.feedback, className)}>
      <Row className="g-5">
        <Col lg={6}>
          <ImageA clas src={hinh_nguoi?.data?.attributes?.url}/>
        </Col>
        <Col lg={6}>
          <div className="fb-main">
            <ul>
              {formatData.map(it => (
                <li key={it.id}>
                <Image src={require('../../../assets/ccp/star.png')} />
              </li>
              ))}
            </ul>
            <div className="fb-talk">
              <p dangerouslySetInnerHTML={{ __html: feedback }}/>
              <span>{tac_gia}</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Feedback
