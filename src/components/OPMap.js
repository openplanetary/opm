import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'

import SearchResultMarker from '../components/SearchResultMarker'

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
    const { results } = this.props
    let searchResults
    if (results.length > 0) {
      searchResults = results.map(item => (
        <SearchResultMarker key={item.cartodb_id} name={item.name} lat={item.lat} long={item.long} />
      ))
      console.log(searchResults)
    }

    const position = [this.state.lat, this.state.lng]
    const opmAttribution = '<a href="https://github.com/openplanetary/opm/wiki/OPM-Basemaps" target="blank">OpenPlanetaryMap</a>'

    return (
      <Map center={position} zoom={this.state.zoom} maxBounds={this.state.maxBounds} maxBoundsViscosity={this.state.maxBoundsViscosity}>
        <TileLayer
          attribution={opmAttribution}
          url='https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png'
        />
        {searchResults}
      </Map>
    )
  }
}

OPMap.propTypes = {
  results: PropTypes.array
}

export default OPMap
