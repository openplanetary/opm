import React from 'react'
import { LayersControl, Map, ScaleControl, TileLayer } from 'react-leaflet'
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
        <ScaleControl maxWidth='200' metric imperial={false} />
        <LayersControl>
          <LayersControl.BaseLayer name='OPM Mars Basemap v0.1' checked>
            <TileLayer
              attribution={opmAttribution}
              tms={false}
              url='https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/0,1,2,3,4/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='OPM Shaded Mars Surface Texture Map'>
            <TileLayer
              attribution={`Celestia/praesepe | ${opmAttribution}`}
              tms
              url='http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/celestia_mars-shaded-16k_global/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='OPM Shaded Grayscale MOLA Elevation'>
            <TileLayer
              attribution={`NASA/MOLA | ${opmAttribution}`}
              tms
              url='http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-gray/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='OPM Shaded Colour MOLA Elevation'>
            <TileLayer
              attribution={`NASA/MOLA | ${opmAttribution}`}
              tms
              url='http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/mola-color/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='OPM Global Viking MDIM2.1 Colorized Mosaic'>
            <TileLayer
              attribution={`NASA/Viking/USGS | ${opmAttribution}`}
              tms
              url='http://s3-eu-west-1.amazonaws.com/whereonmars.cartodb.net/viking_mdim21_global/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='OPM Global Hillshade Map'>
            <TileLayer
              attribution={`NASA/MOLA | ${opmAttribution}`}
              tms
              url='https://s3.us-east-2.amazonaws.com/opmmarstiles/hillshade-tiles/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name='OPM Mars Basemap (v0.1) Labels' checked>
            <TileLayer
              attribution={`${opmAttribution}`}
              tms
              url='https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-1/5/{z}/{x}/{y}.png'
            />
          </LayersControl.Overlay>
        </LayersControl>
        {searchResults}
      </Map>
    )
  }
}

OPMap.propTypes = {
  results: PropTypes.array
}

export default OPMap
