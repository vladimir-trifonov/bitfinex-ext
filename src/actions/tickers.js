import { createAction } from 'redux-actions'

export const TICKERS_FETCHED_OK = 'TICKERS_FETCHED_OK'
export const tickersFetchedOkAction = createAction(TICKERS_FETCHED_OK)