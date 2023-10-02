import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

const HeaderCustom = ({ children, sub, className }) => {
  return (
    <div className={cn(styles.headingCustom, className)}>
      <label>{sub || children}</label>
      <h2>{children}</h2>
      <span></span>
    </div>
  )
}

export default HeaderCustom
