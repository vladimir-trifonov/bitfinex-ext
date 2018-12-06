import { createSelector } from 'reselect'

const getTrades = (state) => state.trades

export const getTradesSelector = createSelector(
  [ getTrades ], 
  (trades) => trades
    .map((trade) => {
      return trade
        .remove(0)
        .set(2, (trade.get(2) * 100).toFixed(2))
    })
)