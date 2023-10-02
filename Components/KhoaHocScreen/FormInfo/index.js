import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import InputCustom from '../../ComponentsInner/Input'
import ButtonCustom from '../../ComponentsInner/ButtonCustom'

const FormInfo = ({ className }) => {
  return (
    <div className={cn(styles.formInfo, className)}>
      <Row className="g-5">
        <Col lg={6}>
          <div>
            <h2 className="py-5">ĐĂNG KÝ KHÓA HỌC</h2>
            <form action="">
              <InputCustom placeholder={'Tên'} isFull />
              <InputCustom placeholder={'Số điện thoại'} isFull />
              <InputCustom placeholder={'Email'} isFull />
              <InputCustom placeholder={'Khoá học'} isFull />
            </form>
            <div className="mx-auto mt-4 pt-4 d-flex justify-content-center">
              <ButtonCustom className={'button-primary'}>ĐĂNG KÝ</ButtonCustom>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <figure>
            <Image src={require('../../../assets/ccp/form.png')} />
          </figure>
        </Col>
      </Row>
    </div>
  )
}

export default FormInfo
