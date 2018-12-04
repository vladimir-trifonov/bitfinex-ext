import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { initSagas } from './initSagas'
import { reducer } from './combineReducers'
import { defaultState } from './defaultState'

export const getStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleWares = [sagaMiddleware]

  const composeEnhancers = process.env.NODE_ENV === 'development' 
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
      : compose
  const enhancer = composeEnhancers(applyMiddleware(...middleWares))

  const store = createStore(
      reducer,
      defaultState,
      enhancer,
  )

  initSagas(sagaMiddleware)
  return store
}
