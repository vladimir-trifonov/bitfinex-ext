import { handleActions } from 'redux-actions'
import { tradesFetchedOkAction } from '../actions'
import { List } from 'immutable'

export const trades = handleActions({
  [tradesFetchedOkAction]: (state, action) => List(action.payload.map(List))
}, 
  List([])
)
