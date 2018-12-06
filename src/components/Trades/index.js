import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { socketSubscribeAction, socketUnsubscribeAction } from '../../actions'
import { getTradesSelector } from '../../selectors'
import { Table } from '../Table'
import { parseSymbol } from '../../utils'

class Trades extends PureComponent {
  componentDidMount () {
    this.props.socketSubscribe()
  }

  componentDidUpdate ({ symbol: prevSymbol }) {
    const { symbol, socketSubscribe } = this.props
    symbol !== prevSymbol && socketSubscribe()
  }

  componentWillUnmount () {
    this.props.socketUnsubscribe()
  }

  render () {
    const { trades, symbol } = this.props

    if (!trades) return null

    return (
      <Table
        items={trades}
        title={`Trades - ${parseSymbol(symbol, true)}`}
        columns={['Time', 'Amount', 'Price']}
        count={trades.size}
      />
    )
  }
}

export default connect(
  (state) => ({ trades: getTradesSelector(state) }),
  (dispatch, { symbol }) => ({ 
    socketSubscribe: () => symbol && dispatch(socketSubscribeAction({ symbol, channel: 'trades' })),
    socketUnsubscribe: () => dispatch(socketUnsubscribeAction({ channel: 'trades' }))
  })
)(Trades)