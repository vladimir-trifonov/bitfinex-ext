import React from 'react'
import styles from './Row.module.css'

export default function ({ item = [] }) {
  return (
    <tr>
      {(item.splice(0, 5)).map((data, i) => (
        <td key={i} className={styles.col}>
          {data}
        </td>
      ))}
    </tr>
  )
}