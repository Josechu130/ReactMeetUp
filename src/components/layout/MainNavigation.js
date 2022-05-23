import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from '@mui/material'

import classes from './MainNavigation.module.css'
import { getNumOfFav } from '../../util-hooks/localStorage'

export default function MainNavigation () {
  const [collapse, setCollapse] = useState(true)
  let prevScrollpos = window.pageYOffset

  useEffect(() => {
    window.addEventListener('scroll', scrollCollapseMenu, true)
    getNumOfFav()
  }, [])

  /**
   * Function that allows to check if the actual position of scrollbar is in movement,
   * and show or hide menu depending of his position
   *  */
  function scrollCollapseMenu () {
    const currentScrollPos = window.pageYOffset
    if (document.documentElement.scrollTop > 25) {
      prevScrollpos > currentScrollPos ? setCollapse(true) : setCollapse(false)
      prevScrollpos = currentScrollPos
    } else {
      setCollapse(true)
    }
  }

  return (
    <Collapse in={collapse} collapsedSize={0} className={classes.collapseheader}>
      <header id="header-container" data-test="navigation-header" className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/newmeetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge} id="num-favs-counter">0</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </Collapse>
  )
}
