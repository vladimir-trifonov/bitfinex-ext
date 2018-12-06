import { handleActions } from 'redux-actions'
import { tickersFetchedOkAction } from '../actions'
import { List } from 'immutable'

export const tickers = handleActions({
  [tickersFetchedOkAction]: (state, action) => 
    List(action.payload.map((i) => List.of(i[0], i[1], i[6], i[8])))
}, 
  List([])
)
