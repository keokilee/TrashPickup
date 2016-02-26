import React, { Component } from 'react-native'
import { compose, applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import devTools from 'remote-redux-devtools'

import reducers from '../reducers'
import Router from '../router'
import sagas from '../sagas'

const enhancer = compose(
  applyMiddleware(createSagaMiddleware(...sagas)),
  devTools({name: 'Trash Pickup'})
)

const store = createStore(reducers, {}, enhancer)

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
