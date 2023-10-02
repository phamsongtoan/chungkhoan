import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const InputCustom = ({ className, placeholder, isFull }) => {
  return (
    <div className={cn(styles.inputCustom, className, isFull && 'd-block')}>
      <input className='w-100' type="text" placeholder={placeholder} />
      <span>
      </span>
    </div>
  )
}

export default InputCustom
