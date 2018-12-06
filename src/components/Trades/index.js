import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { socketSubscribeAction, socketUnsubscribeAction, emptyTradesAction } from '../../actions'
import { getTradesSelector } from '../../selectors'
import Table from '../Table'
import { parseSymbol } from '../../utils'

class Trades extends PureComponent {
  componentDidMount () {
    this.props.socketSubscribe()
  }

  componentDidUpdate ({ symbol: prevSymbol }) {
    const { symbol, socketSubscribe } = this.props
    if (symbol !== prevSymbol) {
      socketSubscribe()
    }
  }

  componentWillUnmount () {
    const { socketUnsubscribe, emptyTrades } = this.props
    socketUnsubscribe()
    emptyTrades()
  }

  render () {
    const { trades, symbol } = this.props

    if (!trades) return null

    return (
      <Table
        items={trades}
        title={`Trades ${parseSymbol(symbol, true)}`}
        columns={['Time', 'Amount', 'Price']}
        count={trades.size}
      />
    )
  }
}

export default connect(
  (state) => ({ trades: getTradesSelector(state) }),
  (dispatch, { symbol }) => ({ 
    socketSubscribe: () => symbol && dispatch(socketSubscribeAction({ symbol, channel: 'trades', overwrite: true })),
    socketUnsubscribe: () => dispatch(socketUnsubscribeAction({ channel: 'trades' })),
    emptyTrades: () => dispatch(emptyTradesAction())
  })
)(Trades)