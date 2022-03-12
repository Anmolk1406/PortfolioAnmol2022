import React from 'react'
import styles from '../styles/Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>

        <div className={styles.themeBtn}>
            Theme Switch
        </div>

        <div className={styles.links}>
            <li className={[styles.linkBtns, styles.active].join(" ")}>Home</li>
            <li className={styles.linkBtns}>Work</li>
            <li className={styles.linkBtns}>About</li>
        </div>

        <div className={styles.btnContainer}>
            <button className={styles.btn}>Say Hi!</button>
            </div>

    </div>
  )
}

export default Navbar