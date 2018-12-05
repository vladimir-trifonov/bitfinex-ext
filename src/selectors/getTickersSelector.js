import { createSelector } from 'reselect'

const getTickers = (state) => state.tickers

export const getTickersSelector = createSelector(
  [ getTickers ], 
  (tickers) => tickers.toJS()
)