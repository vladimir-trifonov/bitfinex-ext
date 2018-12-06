import { handleActions } from 'redux-actions'
import { tradesUpdateReceivedAction, emptyTradesAction } from '../actions'
import { List } from 'immutable'

export const trades = handleActions({
  [tradesUpdateReceivedAction]: (trades, { payload }) => {
    if (payload.length === 2) {
      if (!Array.isArray(payload[1][0])) return trades
      return List(payload[1].map(List))
    }
    if (payload[1] !== 'tu') return trades
    return trades.unshift(List(payload[2])).slice(0, 30)
  },
  [emptyTradesAction]: () => List([])
}, List([]))
