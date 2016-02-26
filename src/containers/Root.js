/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import devTools from 'remote-redux-devtools'

import reducers from '../reducers'
import Router from '../router'

const store = createStore(reducers, {}, devTools({name: 'Trash Pickup'}))

class Root extends Component {
  render () {
    return (
      <Provider hideNavBar store={store}>
        <Router />
      </Provider>
    )
  }
}

export default Root
