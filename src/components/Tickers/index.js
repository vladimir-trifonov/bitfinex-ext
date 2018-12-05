import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchTickersAction } from '../../actions'
import { Table } from '../Table'
import { getTickersSelector } from '../../selectors';

class Tickers extends PureComponent {
  componentDidMount () {
    this.props.fetchTickers()
  }

  render () {
    const { tickers } = this.props

    if (!tickers) return null

    return (
      <Table
        items={tickers}
      />
    )
  }
}

export default connect(
  (state) => ({ tickers: getTickersSelector(state) }),
  (dispatch) => ({ fetchTickers: () => dispatch(fetchTickersAction()) })
)(Tickers)