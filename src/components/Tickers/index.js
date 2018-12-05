import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchTickersAction, setCurrentSymbolAction } from '../../actions'
import { Table } from '../Table'

class Tickers extends PureComponent {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    this.props.fetchTickers()
  }

  handleClick (i) {
    const { tickers } = this.props
    this.props.setCurrentSymbol(tickers.get(i)[0])
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
    setCurrentSymbol: (symbol) => dispatch(setCurrentSymbolAction(symbol)) 
  })
)(Tickers)