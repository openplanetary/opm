import React from 'react'
import { GeoJSON, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'

class SearchResultPolygon extends React.Component {
  render () {
    const { geometry, lat, long, name } = this.props
    return (
      <GeoJSON data={geometry} style={{
        'color': '#aa0629',
        'weight': 2
      }}>
        <Popup>
          <a href='#'>{name}</a>
          <span className='description'>{lat.toFixed(3)}&deg;, {long.toFixed(3)}&deg;</span>
        </Popup>
      </GeoJSON>
    )
  }
}

SearchResultPolygon.propTypes = {
  name: PropTypes.string,
  geometry: PropTypes.array,
  lat: PropTypes.number,
  long: PropTypes.number
}

export default SearchResultPolygon
