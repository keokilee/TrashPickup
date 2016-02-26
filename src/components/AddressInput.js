import React, { PropTypes } from 'react-native'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import secrets from '../../secrets.json'

export default class AddressInput extends React.Component {
  render () {
    return (
      <GooglePlacesAutocomplete
        placeholder='Enter your home address'
        minLength={3}
        fetchDetails
        onPress={this.props.onChangeLocation}
        query={{
          key: secrets.GOOGLE_PLACES_API_KEY,
          language: 'en',
          types: 'address'
        }}
        styles={{
          textInputContainer: {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#4CAF50'
          }
        }}
        currentLocation
        currentLocationLabel='Current Location'
        nearbyPlacesAPI='GoogleReverseGeocoding'
        GoogleReverseGeocodingQuery={{
          result_type: 'street_address'
        }}
        enablePoweredByContainer={false}
      />
    )
  }
}

AddressInput.propTypes = {
  onChangeLocation: PropTypes.func
}
