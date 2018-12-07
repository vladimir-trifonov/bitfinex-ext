import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { emptyBookAction } from '../../actions'
import { getBookSelector } from '../../selectors'
import Table from 'react-immutable-table'
import { parseSymbol } from '../../utils'
import { withSubscription } from '../HOC'

class Book extends PureComponent {
  render () {
    const { book, symbol } = this.props
    
    if (!book) return null

    return (
      <Table
        items={book}
        title={`Order Book ${parseSymbol(symbol, true)}`}
        columns={['Price', 'Count', 'Amount']}
        count={book.size}
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