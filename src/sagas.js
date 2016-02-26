import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { Actions } from 'react-native-router-flux'

import * as client from './arcgis_client'
import { SET_LOCATION, setRoutes, fetchingRoutes } from './actions'

function * queryRoutes ({ payload }) {
  yield put(fetchingRoutes())

  const [ refuseResult, bulkyResult ] = yield [
    call(client.refuse, payload.details.geometry.location),
    call(client.bulky, payload.details.geometry.location)
  ]

  yield put(setRoutes(refuseResult, bulkyResult))
  yield Actions.timers()
}

function * setLocationSaga () {
  yield * takeEvery(SET_LOCATION, queryRoutes)
}

export default [setLocationSaga]
