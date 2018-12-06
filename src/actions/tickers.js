import { createAction } from 'redux-actions'

export const FETCH_TICKERS = 'FETCH_TICKERS'
export const TICKERS_FETCHED_OK = 'TICKERS_FETCHED_OK'
export const STOP_TICKERS_SYNC = 'STOP_TICKERS_SYNC'

export const fetchTickersAction = createAction(FETCH_TICKERS)
export const tickersFetchedOkAction = createAction(TICKERS_FETCHED_OK)
export const stopTickersSyncAction = createAction(STOP_TICKERS_SYNC)