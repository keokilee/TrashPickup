import { combineReducers } from 'redux'

import { SET_LOCATION } from './actions'

function location (state = {}, { type, payload }) {
  switch (type) {
    case SET_LOCATION:
      const { formatted_address, place_id, geometry } = payload.details
      return {
        ...state,
        formatted_address,
        place_id,
        location: geometry.location
      }
    default:
      return state
  }
}

export default combineReducers({
  location
})
