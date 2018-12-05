import React, { PureComponent } from 'react'
import styles from './Table.module.css'
import Row from './Row'
import Header from './Header'

export class Table extends PureComponent {
  static defaultProps = {
    useDataAsKey: false,
    keyDataIndex: 0,
    columns: null
  }

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const { onClick, columns } = this.props
    const rowIndex = e.target.parentElement.rowIndex
    onClick && onClick(columns ? rowIndex - 1 : rowIndex)
  }

  render () {
    const { items, columns, title, useDataAsKey, keyDataIndex, count } = this.props

    if (!items || !count) return null

    return (
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          {title &&
            <div className={styles.title}>
              {title}
            </div>
          }
          <table>
            {columns &&
              <thead>
                <Header columns={columns} />
              </thead>
            }
            <tbody onClick={this.handleClick}>
              {items.map((item, i) => (
                <Row key={useDataAsKey ? item[keyDataIndex] : i} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
