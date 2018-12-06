import React, { PureComponent } from 'react'
import styles from './HomePage.module.css'
import Symbols from '../../components/Symbols'

export default class extends PureComponent {
  render() {
    return (
      <main className={styles.homePage}>
        <Symbols />
      </main>
    )
  }
}
