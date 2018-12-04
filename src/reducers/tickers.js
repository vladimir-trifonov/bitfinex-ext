import { handleActions } from 'redux-actions'
import { tickersLoaded } from '../actions'

export const tickers = handleActions({
  [tickersLoaded]: (state, action) => ({
    tickers: action.payload
  })}, { tickers: [] }
)
