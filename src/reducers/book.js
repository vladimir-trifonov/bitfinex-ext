import { handleActions } from 'redux-actions'
import { bookUpdateReceivedAction, emptyBookAction } from '../actions'
import { List } from 'immutable'

export const book = handleActions({
  [bookUpdateReceivedAction]: (book, { payload }) => {
    if(Array.isArray(payload[1][0])) return List(payload[1])
    return book
    // return book.unshift(List(payload[1]))
  },
  [emptyBookAction]: () => List([])
}, List([]))
