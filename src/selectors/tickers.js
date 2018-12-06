import { createSelector } from 'reselect'
import { parseSymbol } from '../utils'
import { List } from 'immutable'

const getTickers = (state) => state.tickers

export const getTickersSelector = createSelector(
  [ getTickers ], 
  (tickers) => tickers
    .filter((ticker) => ticker.get(0).startsWith('t'))
    .map((ticker) => {
      const normalized = ticker
        .set(0, parseSymbol(ticker.get(0), true))
        .set(2, (ticker.get(2) * 100).toFixed(2))

      return List.of(
        normalized.get(0), 
        normalized.get(1), 
        normalized.get(6), 
        normalized.get(8)
      )
    })
)