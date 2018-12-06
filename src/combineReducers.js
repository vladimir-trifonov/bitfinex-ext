import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { symbols, tickers, trades, book } from './reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  symbols,
  tickers,
  trades,
  book
})
