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
    const { name, long, lat } = this.props
    return (
      <li>
        <span className='fa-li'>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <a href='#'>{name}</a>
        <span className='description'>{long}&deg;, {lat}&deg;</span>
      </li>
    )
  }
}

export default SearchResult
