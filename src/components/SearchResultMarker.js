import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import PropTypes from 'prop-types'

class SearchResultMarker extends React.Component {
  render () {
    const { name, long, lat } = this.props
    return (
      <Marker position={[long, lat]}>
        <Popup>
          <a href='#'>{name}</a>
          <span className='description'>{long.toFixed(3)}&deg;, {lat.toFixed(3)}&deg;</span>
        </Popup>
      </Marker>
    )
  }
}

SearchResultMarker.propTypes = {
  name: PropTypes.string,
  long: PropTypes.number,
  lat: PropTypes.number
}

export default SearchResultMarker
