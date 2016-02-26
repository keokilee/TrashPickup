export const SET_LOCATION = 'SET_LOCATION'
export const FETCH_RESULTS = 'FETCH_RESULTS'
export const SET_ROUTES = 'SET_ROUTES'

export function setLocation (location, details) {
  return {
    type: SET_LOCATION,
    payload: {
      location,
      details
    }
  }
}

export function fetchingRoutes () {
  return {
    type: FETCH_RESULTS
  }
}

export function setRoutes (refuse, bulky) {
  return {
    type: SET_ROUTES,
    payload: {
      refuse,
      bulky
    }
  }
}
