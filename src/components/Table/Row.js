import React, { PureComponent } from 'react'
import styles from './Row.module.css'

export class Row extends PureComponent {
  render () {
    const { item } = this.props
    return (
      <tr>
        {item && item.slice(0, 5).map((data, i) => (
          <td key={i} className={styles.col}>
            {data}
          </td>
        ))}
      </tr>
    )
  }
}
