import { createSelector } from 'reselect'
import { parseSymbol } from '../utils'
import { chunk } from '../utils'

const getSymbols = (state) => state.symbols

export const getSymbolsSelector = createSelector(
  [ getSymbols ], 
  (symbols) => !symbols 
    ? symbols 
    // Divide on chunks, by 5 items on a line for UI purpose
    : chunk(symbols.map((s) => parseSymbol(s, false)), 5) 
)