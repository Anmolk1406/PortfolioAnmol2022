import React from 'react'
import styles from '../styles/CardItem.module.css'
import image from 'next/image'

function CardItem({projects}) {
  return (
    projects.map(projects => <div className={styles.cardItem}>
        <div className={styles.number}>{projects.cardNumber}</div>
        <div className={styles.cardInfo}>
            </div>
    </div>)
  )
}

export default CardItem