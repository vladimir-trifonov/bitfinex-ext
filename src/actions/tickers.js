import { createAction } from 'redux-actions'

export const FETCH_TICKERS = 'FETCH_TICKERS'
export const TICKERS_FETCHED_OK = 'TICKERS_FETCHED_OK'

export const fetchTickersAction = createAction(FETCH_TICKERS)
export const tickersFetchedOkAction = createAction(TICKERS_FETCHED_OK)