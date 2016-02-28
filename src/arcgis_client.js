import qs from 'qs'
// ?where=1%3D1&geometry=-157.8690224%2C21.3280193&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIndexIntersects&outFields=*&returnGeometry=false&f=json
const BULKY_BASE_URL = 'http://services.arcgis.com/tNJpAOha4mODLkXz/ArcGIS/rest/services/Refuse_Bulky_Pickup_Routes/FeatureServer/0/query'
const REFUSE_BASE_URL = 'http://services.arcgis.com/tNJpAOha4mODLkXz/ArcGIS/rest/services/Schedules/FeatureServer/0/query'

const BASE_PARAMS = {
  where: '1=1',
  geometryType: 'esriGeometryPoint',
  inSR: 4326,
  spatialRel: 'esriSpatialRelIndexIntersects',
  outFields: '*',
  returnGeometry: false,
  f: 'json'
}

export function bulky ({ lng, lat }) {
  const params = {
    ...BASE_PARAMS,
    geometry: `${lng},${lat}`
  }

  return fetch(`${BULKY_BASE_URL}?${qs.stringify(params)}`)
    .then((response) => response.json())
    .then((body) => {
      if (body.features.length === 0) {
        return null
      }

      return body.features[0].attributes
    })
}

export function refuse ({ lng, lat }) {
  const params = {
    ...BASE_PARAMS,
    geometry: `${lng},${lat}`
  }

  return fetch(`${REFUSE_BASE_URL}?${qs.stringify(params)}`)
    .then((response) => response.json())
    .then((body) => {
      if (body.features.length === 0) {
        return null
      }

      console.log(body.features)
      return body.features[0].attributes
    })
}
