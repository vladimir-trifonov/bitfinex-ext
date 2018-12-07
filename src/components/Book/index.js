import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { emptyBookAction } from '../../actions'
import { getBookSelector } from '../../selectors'
import Table from 'react-immutable-table'
import { parseSymbol } from '../../utils'
import { withSubscription } from '../HOC'

class Book extends PureComponent {
  constructor () {
    super()

    this.renderConrols = this.renderConrols.bind(this)
  }

  renderConrols () {
    return (
      <span>
        <button onClick={() => {}}>+</button>
        <button onClick={() => {}}>-</button>
      </span>
    )
  }
  
  render () {
    const { book, symbol } = this.props
    
    return (
      <Table
        items={book}
        title={`Order Book ${parseSymbol(symbol, true)}`}
        columns={['Price', 'Count', 'Amount']}
        count={book ? book.size : 0}
        // renderControls={this.renderConrols}
      />
    )
  }
}

export default withSubscription(
  connect(
    (state) => ({ book: getBookSelector(state) })
  )(Book),
  { channel: 'book', prop: 'symbol', onUnsubscribeAction: emptyBookAction }
)