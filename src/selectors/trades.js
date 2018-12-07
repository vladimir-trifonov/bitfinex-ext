import { createSelector } from 'reselect'

const getTrades = (state) => state.trades

export const getTradesSelector = createSelector(
  [ getTrades ], 
  (trades) => !trades
    ? trades
    : trades
      .map((trade) => trade
        // Do not display the ID
        .remove(0)
      )
)