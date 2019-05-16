import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'

class SearchResultMarker extends React.Component {
  render () {
    const { name, lat, long } = this.props
    return (
      <Marker position={[lat, long]}>
        <Popup>
          <a href='#'>{name}</a>
          <span className='description'>{lat.toFixed(3)}&deg;, {long.toFixed(3)}&deg;</span>
        </Popup>
      </Marker>
    )
  }
}

SearchResultMarker.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  long: PropTypes.number
}

export default SearchResultMarker
