import React, { PureComponent, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history, configureStore } from '../../configureStore'
import Home from '../../pages/Home'
import Trading from '../../pages/Trading'

const store = configureStore()

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Route exact path="/" component={Home} />
            <Route path="/trading/:symbol" component={Trading} />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
