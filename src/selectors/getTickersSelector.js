import { createSelector } from 'reselect'
import { parseSymbol } from '../utils'

const getTickers = (state) => state.tickers

export const getTickersSelector = createSelector(
  [ getTickers ], 
  (tickers) => tickers
    .filter((ticker) => ticker.get(0).startsWith('t'))
    .map((ticker) => {
      return ticker
        .set(0, parseSymbol(ticker.get(0), true))
        .set(2, (ticker.get(2) * 100).toFixed(2))
    })
)