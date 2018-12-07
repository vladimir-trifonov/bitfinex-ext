import { handleActions } from 'redux-actions'
import { bookUpdateReceivedAction, emptyBookAction } from '../actions'
import { normalizeBookUpdate } from '../normalizers'

export const book = handleActions({
  [bookUpdateReceivedAction]: (book, { payload }) => normalizeBookUpdate(book, payload),
  [emptyBookAction]: () => null
}, null)
