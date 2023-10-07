import React, { useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import InputCustom from '../../ComponentsInner/Input'
import ButtonCustom from '../../ComponentsInner/ButtonCustom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { api } from '../../../libs/api'

const FormInfo = ({ className }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, register, formState: { errors, isValid, dirtyFields }, reset } = useForm({ mode: 'all' })
  const onSubmitForm = async (formValues) => {
    setIsLoading(true)
    const { data: created } = await api.post('/dang-ky-khoa-hocs', {
      data: formValues
    })

    if (created.data) {
      toast('Đăng ký thành công!', { type: 'success' })
      reset()
    }

    setIsLoading(false)
  }

  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={cn(styles.formInfo, className)}>
      <Row className="g-5">
        <Col lg={6}>
          <div>
            <h2 className="py-5">ĐĂNG KÝ KHÓA HỌC </h2>
              <InputCustom className="mb-3" errorStyle="mb-0" error={errors.ten?.message} placeholder={'Tên'} isFull {...register('ten', { required: 'Vui lòng nhập Tên của bạn' })}/>
              <InputCustom className="mb-3" errorStyle="mb-0" error={errors.so_dien_thoai?.message} placeholder={'Số điện thoại'} isFull {...register('so_dien_thoai', {
                required: 'Vui lòng nhập số điện thoại của bạn',
                pattern: {
                  value: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                  message: 'Vui lòng nhập đúng số điện thoại'
                }
              })}/>
              <InputCustom className="mb-3" errorStyle="mb-0" error={errors.email?.message} placeholder={'Email'} isFull {...register('email', {
                required: 'Vui lòng nhập email của bạn',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Vui lòng nhập đúng địa chỉ email'
                }
              })}/>
              <InputCustom className="mb-3" errorStyle="mb-0" error={errors.khoa_hoc?.message} placeholder={'Khoá học'} isFull {...register('khoa_hoc', { required: 'Vui lòng nhập khóa học' })} />
            <div className="mx-auto mt-4 pt-4 d-flex justify-content-center">
              <ButtonCustom disabled={!isValid} type="submit" className={'button-primary'}>{isLoading ? 'Loading...' : 'ĐĂNG KÝ'}</ButtonCustom>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <figure>
            <Image src={require('../../../assets/ccp/form.png')} />
          </figure>
        </Col>
      </Row>
    </form>
  )
}

export default FormInfo
