import { createAction } from 'redux-actions'

export const FETCH_TRADES = 'FETCH_TRADES'
export const TRADES_FETCHED_OK = 'TRADES_FETCHED_OK'

export const fetchTradesAction = createAction(FETCH_TRADES)
export const tradesFetchedOkAction = createAction(TRADES_FETCHED_OK)