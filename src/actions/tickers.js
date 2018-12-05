import { createAction } from 'redux-actions'

export const FETCH_TICKERS = 'FETCH_TICKERS'
export const TICKERS_FETCHED_OK = 'TICKERS_FETCHED_OK'
export const CURRENT_TICKER_CHANGED = 'CURRENT_TICKER_CHANGED'
export const STOP_TICKERS_SYNC = 'STOP_TICKERS_SYNC'

export const fetchTickersAction = createAction(FETCH_TICKERS)
export const tickersFetchedOkAction = createAction(TICKERS_FETCHED_OK)
export const currentTickerChangedAction = createAction(CURRENT_TICKER_CHANGED)
export const stopTyckersSyncAction = createAction(STOP_TICKERS_SYNC)