import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class SearchResult extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSidebarActive: false
    }
  }

  render () {
    return (
      <li>
        <span className='fa-li'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <a href='#'>{this.props.name}</a>
        <span className='description'>LAT&deg;, LONG&deg;</span>
      </li>
    )
  }
}

export default SearchResult
