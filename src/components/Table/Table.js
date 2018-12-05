import React, { PureComponent } from 'react'
import styles from './Table.module.css'
import Row from './Row'

export class Table extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const { onClick } = this.props
    onClick && onClick(e.target.parentElement.rowIndex)
  }

  render () {
    const { items } = this.props
    return (
      <div className={styles.tableWrapper}>
        <div className={styles.table}>
          <table>
            <tbody onClick={this.handleClick}>
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
