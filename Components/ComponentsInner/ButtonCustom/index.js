import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const ButtonCustom = ({ children, className, ...props }) => {
  return (
    <button className={cn(styles.buttonCustom, className)} {...props}>
      {children}
    </button>
  )
}

export default ButtonCustom
