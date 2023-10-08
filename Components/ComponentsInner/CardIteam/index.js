import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'
import ImgHover from '../ImgHover'
import Link from 'next/link'

const CardItem = ({ title, src, srcItem, des, isNews, className, link }) => {
  return (
    <Link href={link || '/'} className={cn(styles.cardItem, 'pb-5', className)}>
      <ImgHover className='card-item' src={src}/>
      {title &&
        (isNews
          ? (
          <h3 className="uppercase mt-4 fw-bold mb-0 px line-clamp">
            {title}
          </h3>
            )
          : (
          <h4 className="uppercase mt-4 mb-0 fw-bold line-clamp">
            {title}
          </h4>
            ))}
      {des && <p className="des mt-4 line-clamp">{des}</p>}
    </Link>
  )
}

export default CardItem
