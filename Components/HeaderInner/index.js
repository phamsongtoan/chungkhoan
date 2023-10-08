import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import Link from 'next/link'
import MenuFixedInfo from '../ComponentsInner/MenuFixedInfo'
import { useRouter } from 'next/router'

import {
  AiTwotoneMail,
  AiTwotonePhone
} from 'react-icons/ai'
import { useAppContext } from '../../Context/AppContext'

const HeaderInner = ({ allCategories }) => {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)
  const [, setScroll] = useState(false)

  const { footer } = useAppContext()

  console.log(footer, 'footer')

  const { mail, hotline } = footer.data.attributes

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
    setScroll(false)
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 2)
      setShowMenu(false)
    })
  }, [])

  const dataNav = [
    {
      title: 'CỔ PHIẾU',
      link: '/cophieu'
    },
    {
      title: 'KHOÁ HỌC',
      link: '/khoahoc'
    },
    {
      title: 'KIẾN THỨC',
      link: '/kienthuc'
    },
    {
      title: 'TIN TỨC',
      link: '/tintuc'
    }
  ]
  return (
    <div className={cn(styles.headerInner, 'py-3')}>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <Link className='fw-bold' href='/'>
              CCP
            </Link>
          </div>
          <div className='header-main' >
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
            <div className='header-social'>
                <a href={`tel:${hotline}`} target="_blank" rel="noreferrer" >
                    <AiTwotonePhone className='icon-header icon-tel'/> &nbsp; <span>{hotline}</span>
                  </a>
                  <a href={`mailto:${mail}`} target="_blank" rel="noreferrer" >
                    <AiTwotoneMail className='icon-header'/> &nbsp; <span>{mail}</span>
                  </a>
            </div>

            {/* <div onClick={handleShowMenu} className="header-burger"> */}
            {/* <Burger isCheck={showMenu} handleCheck={handleShowMenu} /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      <MenuFixedInfo
        handleClose={handleShowMenu}
        className={cn('menu-info', (showMenu) && 'menu-info--show')}
      />
    </div>
  )
}

export default HeaderInner
