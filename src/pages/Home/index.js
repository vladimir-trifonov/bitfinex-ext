import React, { PureComponent } from 'react'
import styles from './Home.module.css'
import { Symbols } from '../../components'

export class Home extends PureComponent {
  render() {
    return (
      <main className={styles.home}>
        <Symbols />
      </main>
    )
  }
}
