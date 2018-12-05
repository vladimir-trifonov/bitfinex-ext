import { createAction } from 'redux-actions'

export const FETCH_TRADES = 'FETCH_TRADES'
export const TRADES_FETCHED_OK = 'TRADES_FETCHED_OK'
export const STOP_TRADES_SYNC = 'STOP_TRADES_SYNC'

export const fetchTradesAction = createAction(FETCH_TRADES)
export const tradesFetchedOkAction = createAction(TRADES_FETCHED_OK)
export const stopTradesSyncAction = createAction(STOP_TRADES_SYNC)