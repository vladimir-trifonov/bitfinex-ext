import { createAction } from 'redux-actions'

export const loadTickers = createAction('LOAD_TICKERS')
export const tickersLoaded = createAction('TICKERS_LOADED')