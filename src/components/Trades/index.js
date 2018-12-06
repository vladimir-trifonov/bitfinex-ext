import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { wsSubscribeAction, wsUnsubscribeAction } from '../../actions'
import { getTradesSelector } from '../../selectors'
import { Table } from '../Table'
import { parseSymbol } from '../../utils'

class Trades extends PureComponent {
  componentDidMount () {
    this.props.wsSubscribe()
  }

  componentDidUpdate ({ symbol: prevTicker }) {
    const { symbol, wsSubscribe } = this.props
    symbol !== prevTicker && wsSubscribe()
  }

  componentWillUnmount () {
    this.props.wsUnsubscribe()
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
    wsSubscribe: () => symbol && dispatch(wsSubscribeAction({ symbol, channel: 'trades' })),
    wsUnsubscribe: () => dispatch(wsUnsubscribeAction({ channel: 'trades' }))
  })
)(Trades)