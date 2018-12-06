import { createAction } from 'redux-actions'

export const FETCH_TICKERS_AND_SYNC = 'FETCH_TICKERS_AND_SYNC'
export const STOP_TICKERS_SYNC = 'STOP_TICKERS_SYNC'
export const TICKERS_FETCHED_OK = 'TICKERS_FETCHED_OK'
export const EMPTY_TICKERS = 'EMPTY_TICKERS'

export const fetchTickersAndSyncAction = createAction(FETCH_TICKERS_AND_SYNC)
export const stopTickersSyncAction = createAction(STOP_TICKERS_SYNC)
export const tickersFetchedOkAction = createAction(TICKERS_FETCHED_OK)
export const emptyTickersAction = createAction(EMPTY_TICKERS)