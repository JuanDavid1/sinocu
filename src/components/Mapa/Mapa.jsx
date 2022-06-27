import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

class Mapa extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAczuFLHuQzDfXGpYxXDrWRbqeLdCLKphs"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{lat: 5.1673600452362685, lng: -72.54803690336522  }}
          zoom={10}
        >
          <></>
          <Marker position={{lat: 5.1673600452362685, lng: -72.54803690336522  }}/>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default React.memo(Mapa)


