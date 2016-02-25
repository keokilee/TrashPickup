import { combineReducers } from 'redux'

import { SET_LOCATION } from './actions'

function location (state = {}, { type, payload }) {
  switch (type) {
    case SET_LOCATION:
      return payload
    default:
      return state
  }
}

export default combineReducers({
  location
})
