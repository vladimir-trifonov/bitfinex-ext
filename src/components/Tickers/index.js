import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  fetchTickersAndSyncAction, 
  currentSymbolChangedAction, 
  stopTickersSyncAction,
  emptyTickersAction,
  setFilterAction
} from '../../actions'
import { getTickersSelector } from '../../selectors'
import Table from 'react-immutable-table'

class Tickers extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }

  componentDidMount () {
    const { fetchTickers, emptyTickers } = this.props
    emptyTickers()
    fetchTickers()
  }

  componentWillUnmount () {
    const { stopTickersSync, emptyTickers } = this.props
    stopTickersSync()
    emptyTickers()
  }

  handleClick (index) {
    const ticker = this.props.tickers.get(index)
    const [symbol] = ticker
    this.props.currentSymbolChanged(symbol)
  }

  onSearch (filter) {
    this.props.setFilter(filter)
  }

  render () {
    const { tickers } = this.props

    return (
      <Table
        items={tickers}
        onClick={this.handleClick}
        title = 'Tickers'
        columns={['Name', 'Last', '24H', 'VOL BTC']}
        count={tickers ? tickers.size : 0}
        onSearch={this.onSearch}
      />
    )
  }
}

export default connect(
  (state) => ({ tickers: getTickersSelector(state) }),
  (dispatch) => ({ 
    fetchTickers: () => dispatch(fetchTickersAndSyncAction('tickers')),
    currentSymbolChanged: (symbol) => dispatch(currentSymbolChangedAction(symbol)), 
    stopTickersSync: () => dispatch(stopTickersSyncAction()),
    emptyTickers: () => dispatch(emptyTickersAction()),
    setFilter: (filter) => dispatch(setFilterAction({ tickers: filter })) 
  })
)(Tickers)
