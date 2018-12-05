import React from 'react'
import styles from './Dashboard.module.css'
import Tickers from '../Tickers'
import Trades from '../Trades'

export default ({ match: { params: { ticker = null }}}) => {
  return (
    <main className={styles.dashboard}>
      <Tickers />
      <Trades ticker={ticker} />
    </main>
  )
}
