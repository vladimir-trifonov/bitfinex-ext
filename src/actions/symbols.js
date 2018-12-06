import { createAction } from 'redux-actions'

export const FETCH_SYMBOLS = 'FETCH_SYMBOLS'
export const SYMBOLS_FETCHED_OK = 'SYMBOLS_FETCHED_OK'
export const CURRENT_SYMBOL_CHANGED = 'CURRENT_SYMBOL_CHANGED'

export const fetchSymbolsAction = createAction(FETCH_SYMBOLS)
export const symbolsFetchedOkAction = createAction(SYMBOLS_FETCHED_OK)
export const currentSymbolChangedAction = createAction(CURRENT_SYMBOL_CHANGED)