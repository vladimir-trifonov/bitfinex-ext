import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
// import { List } from 'react-virtualized'
import { fetchTickersAction } from '../../actions'

class Tickers extends PureComponent {
  componentDidMount () {
    this.props.fetchTickers()
  }

  render () {
    const { tickers } = this.props
    return (
      <Fragment>
        Tickers
      </Fragment>
    )
  }
}

export default connect(
  ({ tickers }) => ({ tickers }),
  (dispatch) => ({ fetchTickers: () => dispatch(fetchTickersAction()) })
)(Tickers)