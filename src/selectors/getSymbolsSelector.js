import { createSelector } from 'reselect'
import { parseSymbol } from '../utils'
import { chunk } from '../utils'

const getSymbols = (state) => state.symbols

export const getSymbolsSelector = createSelector(
  [ getSymbols ], 
  (symbols) => chunk(symbols.map((s) => parseSymbol(s, false)), 5)
)