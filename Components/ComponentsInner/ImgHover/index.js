import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Image from 'next/image'
import ImageA from '../Image'

const ImgHover = ({ src, data, className }) => {
  return (
    <figure className={cn(styles.imgHover, className)}>
      {src ? <ImageA src={src}/> : <Image src={require('../../../assets/projects/banan.jpeg')} />}
    </figure>
  )
}

export default ImgHover
