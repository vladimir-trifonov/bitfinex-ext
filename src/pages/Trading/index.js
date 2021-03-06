import React, { PureComponent } from 'react'
import styles from './Trading.module.css'
import { Tickers, Book, Trades } from '../../components'

export class Trading extends PureComponent {
  render() {
    const { match: { params: { symbol = null }}} = this.props
    return (
      <main className={styles.trading}>
        <Tickers />
        <Trades symbol={symbol} />
        <Book symbol={symbol} />
      </main>
    )
  }
}
