import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  fetchTickersAction, 
  currentTickerChangedAction, 
  stopTyckersSyncAction 
} from '../../actions'
import { Table } from '../Table'

class Tickers extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchTickers()
  }

  componentWillUnmount () {
    this.props.stopTyckersSync()
  }

  handleClick (i) {
    const ticker = this.props.tickers.get(i)
    ticker && this.props.currentTickerChanged(ticker[0])
  }

  render () {
    const { tickers } = this.props

    if (!tickers) return null

    return (
      <Table
        items={tickers}
        onClick={this.handleClick}
      />
    )
  }
}

export default connect(
  ({ tickers }) => ({ tickers }),
  (dispatch) => ({ 
    fetchTickers: () => dispatch(fetchTickersAction()),
    currentTickerChanged: (symbol) => dispatch(currentTickerChangedAction(symbol)), 
    stopTyckersSync: () => dispatch(stopTyckersSyncAction()) 
  })
)(Tickers)