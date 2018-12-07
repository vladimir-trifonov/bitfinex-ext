import { createSelector } from 'reselect'
import { parseSymbol } from '../utils'
import { List } from 'immutable'

const getTickers = (state) => state.tickers

export const getTickersSelector = createSelector(
  [ getTickers ], 
  (tickers) => !tickers 
    ? tickers
    : tickers
      // Do not displays tickers which start with trading
      // selector, because they are single currencies
      .filter((ticker) => ticker.get(0).startsWith('t'))
      .map((ticker) => {
        const normalized = ticker
          // Format the symbol
          .set(0, parseSymbol(ticker.get(0), true))
          // Format the 24H amount, which is in percents
          .set(2, `${(ticker.get(2) * 100).toFixed(2)}%`)

        const volInBTC = parseFloat(normalized.get(8))
        // Returns only the fields, that needs to be displayed
        return List.of(
          normalized.get(0), 
          normalized.get(1), 
          normalized.get(6), 
          `${(volInBTC | 0) === 0 ? volInBTC : (volInBTC | 0)} BTC`
        )
      })
)