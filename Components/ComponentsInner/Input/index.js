import React, { forwardRef } from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const InputCustom = forwardRef(function InputCustom ({ className, placeholder, isFull, error, errorStyle, ...props }, ref) {
  return (
    <>
    <div className={cn(styles.inputCustom, className, error && errorStyle, isFull && 'd-block')}>
      <input className='w-100' type="text" placeholder={placeholder} ref={ref} {...props} />
      <span/>
    </div>
    {error && <div className={cn('text-danger', className)}>
    {error}
    </div>}
    </>
  )
})

export default InputCustom
