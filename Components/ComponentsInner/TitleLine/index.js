import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

const TitleLine = ({ className, title }) => {
  return (
    <h4 className={cn(styles.titleLine, className, title)}>
       {title}
    </h4>
  )
}

export default TitleLine
