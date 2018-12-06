import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { socketSubscribeAction, socketUnsubscribeAction, emptyBookAction } from '../../actions'
import { getBookSelector } from '../../selectors'
import Table from '../Table'
import { parseSymbol } from '../../utils'

class Book extends PureComponent {
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
    const { socketUnsubscribe, emptyBook } = this.props
    socketUnsubscribe()
    emptyBook()
  }

  render () {
    const { book, symbol } = this.props
    
    if (!book) return null

    return (
      <Table
        items={book}
        title={`Order Book ${parseSymbol(symbol, true)}`}
        columns={['Time', 'Amount', 'Price']}
        count={book.size}
      />
    )
  }
}

export default connect(
  (state) => ({ book: getBookSelector(state) }),
  (dispatch, { symbol }) => ({ 
    socketSubscribe: () => symbol && dispatch(socketSubscribeAction({ symbol, channel: 'book', overwrite: true })),
    socketUnsubscribe: () => dispatch(socketUnsubscribeAction({ channel: 'book' })),
    emptyBook: () => dispatch(emptyBookAction())
  })
)(Book)