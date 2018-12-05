import React, { PureComponent } from 'react'
import styles from './Table.module.css'
import Row from './Row'

export class Table extends PureComponent {
  render () {
    const { items = [] } = this.props
    return (
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <table>
            <tbody>
              {items.map((item) => (
                <Row key={item[0]} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
