import React, { PureComponent, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history, configureStore } from '../../configureStore'
import HomePage from '../../pages/HomePage'
import TradingPage from '../../pages/TradingPage'

const store = configureStore()

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/trading/:symbol" component={TradingPage} />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
