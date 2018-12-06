import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  fetchResourceAndSyncAction, 
  currentSymbolChangedAction, 
  stopResourceSyncAction 
} from '../../actions'
import { getTickersSelector } from '../../selectors'
import Table from '../Table'

class Tickers extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchTickers()
  }

  componentWillUnmount () {
    this.props.stopTickersSync()
  }

  handleClick (index) {
    const ticker = this.props.tickers.get(index)
    const [symbol] = ticker
    this.props.currentSymbolChanged(symbol)
  }

  render () {
    const { tickers } = this.props

    if (!tickers) return null

    return (
      <Table
        items={tickers}
        onClick={this.handleClick}
        title = 'Tickers'
        columns={['Name', 'Last', '24H', 'VOL BTC']}
        count={tickers.size}
      />
    )
  }
}

export default connect(
  (state) => ({ tickers: getTickersSelector(state) }),
  (dispatch) => ({ 
    fetchTickers: () => dispatch(fetchResourceAndSyncAction('tickers')),
    currentSymbolChanged: (symbol) => dispatch(currentSymbolChangedAction(symbol)), 
    stopTickersSync: () => dispatch(stopResourceSyncAction()) 
  })
)(Tickers)
