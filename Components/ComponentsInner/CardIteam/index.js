import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'
import ImgHover from '../ImgHover'
import Link from 'next/link'

const CardItem = ({ title, srcItem, des, isNews, className, link }) => {
  return (
    <Link href={link || '/'} className={cn(styles.cardItem, 'pb-5', className)}>
      <ImgHover />
      {title &&
        (isNews
          ? (
          <h3 className="uppercase mt-4 fw-bold mb-0 px">
            {title}
          </h3>
            )
          : (
          <h4 className="uppercase mt-4 mb-0 fw-bold ">
            {title}
          </h4>
            ))}
      {des && <p className="des mt-4">{des}</p>}
    </Link>
  )
}

export default CardItem
