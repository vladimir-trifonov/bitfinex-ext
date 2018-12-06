import React from 'react'
import styles from './Title.module.css'

export default ({ title }) => {
  return (
    <div className={styles.title}>
      {title}
    </div>
  )
}
