import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import TitleLine from '../TitleLine'
import { Col, Row } from 'react-bootstrap'
import CardItem from '../CardIteam'

const ItemRelative = ({ className }) => {
  return (
    <div className={cn(styles.itemRelative, className)}>
      <TitleLine className={'mb-4'} title={ 'Các bài liên quan'}/>
        <Row className=' g-5'>
          <Col className='col-lg-4'>
            <CardItem title= 'There are many variations of passages of Lorem Ipsum available'/>
          </Col>
          <Col className='col-lg-4'>
            <CardItem title= 'There are many variations of passages of Lorem Ipsum available'/>
          </Col>
          <Col className='col-lg-4'>
            <CardItem title= 'There are many variations of passages of Lorem Ipsum available'/>
          </Col>
        </Row>
    </div>
  )
}

export default ItemRelative
