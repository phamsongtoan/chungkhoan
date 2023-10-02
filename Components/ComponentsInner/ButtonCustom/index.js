import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const ButtonCustom = ({ children, className }) => {
  return (
    <button className={cn(styles.buttonCustom, className)}>
      {children}
    </button>
  )
}

export default ButtonCustom
