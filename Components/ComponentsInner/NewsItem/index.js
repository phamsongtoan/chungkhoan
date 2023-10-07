import React from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'
import ImgHover from '../ImgHover'
import Link from 'next/link'

const NewsItem = ({ link, title, src, des, className }) => {
  return (
    <Link href={link || '/'} className={cn(styles.newsItem, className)}>
      <ImgHover src={src}/>
      <div className='news-detail'>
        <h6 className='mb-2'>
          {title || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quidem consequatur, fuga sit doloremque culpa dolore expedita totam necessitatibus asperiores minus excepturi aliquid, incidunt nihil aperiam corrupti facere consectetur ex?'}
        </h6>
        <span>
          {des || 'Ngày đăng 21/06/2023 20:58  |  Tin chứng khoán'}
        </span>
      </div>
    </Link>
  )
}

export default NewsItem
