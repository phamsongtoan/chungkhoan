import React from 'react'
import cn from 'classnames'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'
import Link from 'next/link'

const MenuFixed = ({ className }) => {
  const router = useRouter()

  const navMenu = [
    {
      nav: 'home',
      href: '/'
    },
    {
      nav: 'PROJECTS',
      href: '/projects'
    },
    {
      nav: 'CONTACT',
      href: '/contact'
    },
    {
      nav: 'ABOUT US',
      href: '/about'
    }
  ]

  return (
    <div className={cn(styles.menuFixed, className)}>
      <ul>
        {navMenu.map((item, index) => {
          const checkActive = router.pathname === item.href
          return (
            <li key={index} className={cn((checkActive) && 'li-active')}>
                <Link href={item.href}>{item.nav}</Link>
            </li>)
        })}
      </ul>
    </div>
  )
}

export default MenuFixed
