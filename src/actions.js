export const SET_LOCATION = 'SET_LOCATION'

export function setLocation (location, details) {
  return {
    type: SET_LOCATION,
    payload: {
      location,
      details
    }
  }
}
