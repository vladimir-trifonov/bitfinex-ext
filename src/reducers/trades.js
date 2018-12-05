import { handleActions } from 'redux-actions'
import { tradesFetchedOkAction } from '../actions'
import { List } from 'immutable'

export const trades = handleActions({
  [tradesFetchedOkAction]: (state, action) => action.payload
}, 
  List([])
)
