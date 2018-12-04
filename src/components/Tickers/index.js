import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import { List } from 'react-virtualized'
import { loadTickers } from '../../actions'

class Tickers extends Component {
  componentDidMount () {
    this.props.loadTickers()
  }

  render () {
    return (
      <Fragment>
        Tickers
      </Fragment>
    )
  }
}

export default connect(
  ({ tickers }) => ({ tickers }),
  (dispatch) => ({ loadTickers: () => dispatch(loadTickers()) })
)(Tickers)