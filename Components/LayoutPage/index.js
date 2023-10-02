import React from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import FooterPage from '../FooterPage'
import Head from 'next/head'
import HeaderInner from '../HeaderInner'

const LayoutPage = ({ children, title, hideNav, contactSetting }) => {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={cn(styles.layoutPage)}>
        <HeaderInner/>
        {children}
        {
          <FooterPage contactSetting={contactSetting}/>
        }
    </div>
    </>
  )
}

export default LayoutPage
