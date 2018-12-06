import React from 'react'
import styles from './Header.module.css'

export default ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns && columns.map((data, i) => (
          <th key={i} className={styles.col}>
            {data}
          </th>
        ))}
      </tr>
    </thead>
  )
}
