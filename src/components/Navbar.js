import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const data = useStaticQuery(graphql`
      {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const {title} = data.site.siteMetadata

  return (
        <nav className={styles.navbar}>
        <div className={`${styles['navbarContainer']} ${styles['container']}`}>
            <input type="checkbox" name="" id="" />
            <div className={styles.hamburgerLine}>
                <span className={`${styles['line']} ${styles['line1']}`}></span>
                <span className={`${styles['line']} ${styles['line2']}`}></span>
                <span className={`${styles['line']} ${styles['line3']}`}></span>
            </div>
            <ul className={styles.menusItems}>
                <li><a href="#">Homepage</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className={styles.logo}>Navbar</h1>
        </div>
    </nav>
  )
}
