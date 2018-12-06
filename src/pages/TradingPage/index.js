import React from 'react'
import styles from './TradingPage.module.css'
import Tickers from '../../components/Tickers'
import Trades from '../../components/Trades'

export default ({ match: { params: { symbol = null }}}) => {
  return (
    <main className={styles.tradingPage}>
      <Tickers />
      <Trades symbol={symbol} />
    </main>
  )
}
