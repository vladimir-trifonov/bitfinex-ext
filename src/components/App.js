import React, { Component } from 'react'
import './App.css'

import { getStore } from '../getStore'
import { Provider } from 'react-redux'

const store = getStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      </Provider>
    )
  }
}

export default App
