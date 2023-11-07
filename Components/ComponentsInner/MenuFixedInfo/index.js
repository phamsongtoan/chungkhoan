import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {
  AiOutlineClose,
  AiTwotoneMail,
  AiTwotonePhone
} from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useAppContext } from '../../../Context/AppContext'
import ImageA from '../Image'

const MenuFixedInfo = ({ className, handleClose, dataNav }) => {
  const router = useRouter()
  const { footer } = useAppContext()

  const { mail, hotline, logo } = footer.data.attributes

  return (
    <div className={cn(styles.menuFixedInfo, className)}>
      <div className="bg-cover" onClick={handleClose}>
      </div>
      <div className='menufix-container'>
        <div className='icon-close' >
          <AiOutlineClose onClick={handleClose} />
        </div>
        <figure>
          <Link href='/'>
            <ImageA src={logo?.data?.attributes?.url}/>

          </Link>
        </figure>
        <ul>
              {dataNav.map((item, index) => {
                const checkActive = router.pathname.includes(item.link)
                return (
                  <li className={cn('px-2 mx-4', checkActive && 'li-active')} key={index}>
                    <Link href={item.link}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className='header-social mt-5'>
                <a href={`tel:${hotline}`} target="_blank" rel="noreferrer" >
                    <AiTwotonePhone className='icon-header icon-tel'/> &nbsp; <span>{hotline}</span>
                  </a>
                  <a href={`mailto:${mail}`} target="_blank" rel="noreferrer" >
                    <AiTwotoneMail className='icon-header'/> &nbsp; <span>{mail}</span>
                  </a>
            </div>
        <span className='text-center w-full d-block mt-5'>
          © 2023 Code Interactive, All Rights Reserved
        </span>
      </div>
    </div>
  )
}

export default MenuFixedInfo
