import React, { useMemo, useState } from 'react'
import cn from 'classnames'
import styles from './styles.module.scss'
import ContentNav from '../ContentNav'

const NavBar = ({ categories, projects }) => {
  const [tabActive, setTabActive] = useState('all')

  const changeTab = (item) => () => {
    setTabActive(item)
  }

  const renderList = useMemo(() => {
    if (tabActive === 'all') {
      return projects.slice(0, 20)
    }

    return projects.filter(it => it.projectType.find(cat => cat.id === tabActive.id))
  }, [tabActive, projects])

  return (
    <div className={cn(styles.navBar, 'p-3')} >
      <ContentNav projects={renderList}/>
    </div>
  )
}

export default NavBar
