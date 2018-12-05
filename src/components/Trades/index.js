import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchTradesAction, stopTradesSyncAction } from '../../actions'
import { Table } from '../Table'

class Trades extends PureComponent {
  componentDidMount () {
    const { fetchTrades } = this.props
    fetchTrades()
  }

  componentDidUpdate ({ ticker: prevTicker }) {
    const { ticker, fetchTrades } = this.props
    ticker !== prevTicker && fetchTrades()
  }

  componentWillUnmount () {
    this.props.stopTradesSync()
  }

  render () {
    const { trades } = this.props

    if (!trades) return null

    return (
      <Table
        items={trades}
      />
    )
  }
}

export default connect(
  ({ trades }) => ({ trades }),
  (dispatch, { ticker }) => ({ 
    fetchTrades: () => ticker && dispatch(fetchTradesAction(ticker)),
    stopTradesSync: () => dispatch(stopTradesSyncAction())
  })
)(Trades)