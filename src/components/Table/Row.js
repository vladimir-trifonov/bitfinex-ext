import React, { PureComponent } from 'react'
import styles from './Row.module.css'

export default class Row extends PureComponent {
  static renderCell (data, i) {
    return (
      <td key={i} className={styles.col}>
        {data}
      </td>
    )
  }
  render () {
    const { item } = this.props
    return (
      <tr>
        {typeof item === 'string' || typeof item === 'number'
          ? Row.renderCell(item, 0)
          : item.map(Row.renderCell)
        }
      </tr>
    )
  }
}
