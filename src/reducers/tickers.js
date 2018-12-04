import { handleActions } from 'redux-actions'
import { tickersFetchedOkAction } from '../actions'

export const tickers = handleActions({
  [tickersFetchedOkAction]: (state, action) => ({
    tickers: action.payload
  })}, null
)
