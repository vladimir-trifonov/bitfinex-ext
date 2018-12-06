import React, { PureComponent } from 'react'
import styles from './Table.module.css'
import Row from './Row'
import Header from './Header'
import Title from './Title'

export default class extends PureComponent {
  static defaultProps = {
    columns: null
  }

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    const { onClick, columns } = this.props
    const rowIndex = e.target.parentElement.rowIndex
    const cellIndex = e.target.cellIndex
    onClick && onClick(!!columns ? rowIndex - 1 : rowIndex, cellIndex)
  }

  render () {
    const { items, columns, title, count } = this.props

    if (!items || !count) return null

    return (
      <div className={styles.table}>
        {title && <Title title={title} />}
        <table>
          {columns && <Header columns={columns} />}
          <tbody onClick={this.handleClick}>
            {items.map((item, i) => (
              <Row key={i} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
