import Image from 'next/image'
import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
const BannerHome = ({ className }) => {
  return (
    <div data-aos="fade-down" className={cn(styles.bannerHome, className)}>
      <figure>
            <Image src={require('../../../assets/ccp/head-banner.png')} />
          </figure>
    </div>
  )
}

export default BannerHome
