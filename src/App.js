import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      lat: 11.8,
      lng: -45.04,
      zoom: 3,
      maxBounds: [
        [-90, -Infinity],
        [90, Infinity]
      ],
      maxBoundsViscosity: 0.5
    }
  }
  render () {
    const position = [this.state.lat, this.state.lng]
    const opmAttribution = '<a href="https://github.com/openplanetary/opm/wiki/OPM-Basemaps" target="blank">OpenPlanetaryMap</a>'

    return (
      <Map center={position} zoom={this.state.zoom} maxBounds={this.state.maxBounds} maxBoundsViscosity={this.state.maxBoundsViscosity}>
        <TileLayer
          attribution={opmAttribution}
          url='https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>Work in progress&hellip;</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default App
