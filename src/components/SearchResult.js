import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

class SearchResult extends React.Component {
  render () {
    const { name, long, lat } = this.props
    return (
      <li>
        <span className='fa-li'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <a href='#'>{name}</a>
        <span className='description'>{long.toFixed(3)}&deg;, {lat.toFixed(3)}&deg;</span>
      </li>
    )
  }
}

SearchResult.propTypes = {
  name: PropTypes.string,
  long: PropTypes.number,
  lat: PropTypes.number
}

export default SearchResult
