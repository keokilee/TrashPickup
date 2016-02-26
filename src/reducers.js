import { combineReducers } from 'redux'

import { SET_LOCATION, SET_ROUTES, FETCH_RESULTS } from './actions'

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

function pickupDays (state = {}, { type, payload }) {
  switch (type) {
    case SET_ROUTES:
      const { refuse, bulky } = payload
      return {
        loading: false,
        district: refuse.DISTRICT,
        route: refuse.ROUTE_NAME,
        calendar: refuse.CALENDAR,
        pickupDay: refuse.DAY_,
        recycleDay: refuse.RECYCLE_DA,
        bulkySector: bulky.SECTOR,
        bulkyCalendar: bulky.CALENDAR,
        bulkyDay: bulky.RTE_DAY
      }
    default:
      return state
  }
}

export default combineReducers({
  location,
  pickupDays
})
