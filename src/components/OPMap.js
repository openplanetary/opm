import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

class OPMap extends React.Component {
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
        {/* Pass search result coordinates to marker position */}
        <Marker position={[18.65, 226.2]}>
          <Popup>
            <span>Olympus Mons</span>
          </Popup>
        </Marker>
        <Marker position={[-13.9, -59.2]}>
          <Popup>
            <span>Valles Marineris</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default OPMap
