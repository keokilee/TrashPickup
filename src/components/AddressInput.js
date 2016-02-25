import React from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import secrets from '../../secrets.json'

export default class AddressInput extends React.Component {
  onPress (data, details = null) {
    console.log(data)
    console.log(details)
  }

  render () {
    const getDefaultValue = () => ''

    return (
      <GooglePlacesAutocomplete
        placeholder='Search'
        minLength={3}
        fetchDetails
        onPress={this.onPress}
        getDefaultValue={getDefaultValue}
        query={{
          key: secrets.GOOGLE_PLACES_API_KEY,
          language: 'en'
        }}
        styles={{
          description: {
            fontWeight: 'bold'
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          }
        }}
        currentLocation
        currentLocationLabel='Current Location'
        nearbyPlacesAPI='GooglePlacesSearch'
      />
    )
  }
}
