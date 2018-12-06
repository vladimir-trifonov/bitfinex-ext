import { createAction } from 'redux-actions'

export const TRADES_FETCHED_OK = 'TRADES_FETCHED_OK'

export const tradesFetchedOkAction = createAction(TRADES_FETCHED_OK)