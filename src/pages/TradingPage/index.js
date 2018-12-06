import React, { PureComponent } from 'react'
import styles from './TradingPage.module.css'
import Tickers from '../../components/Tickers'
import Trades from '../../components/Trades'

export default class extends PureComponent {
  render() {
    const { match: { params: { symbol = null }}} = this.props
    return (
      <main className={styles.tradingPage}>
        <Tickers />
        <Trades symbol={symbol} />
      </main>
    )
  }
}
