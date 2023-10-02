import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/image'

const ImgHover = ({ data, className }) => {
  return (
    <figure className={cn(styles.imgHover, className)}>
      <Image src={require('../../../assets/projects/banan.jpeg')} />
    </figure>
  )
}

export default ImgHover
