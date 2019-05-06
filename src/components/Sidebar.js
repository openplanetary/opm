import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSidebarActive: true
    }
    this.handleSidebar = this.handleSidebar.bind(this)
  }

  handleSidebar () {
    if (this.state.isSidebarActive) {
      document.body.classList.remove('sidebar-active')
    } else {
      document.body.classList.add('sidebar-active')
    }
    this.setState(state => ({
      isSidebarActive: !state.isSidebarActive
    }))
  }

  render () {
    const isSidebarActive = this.state.isSidebarActive
    console.log(isSidebarActive)

    return (
      <div className='sidebar-container'>
        <button className='sidebar-button' onClick={this.handleSidebar}>
          <FontAwesomeIcon className='sidebar-caret' icon={faCaretLeft} transform={isSidebarActive ? { rotate: 0 } : { rotate: 180 }} />
        </button>
        <fieldset className='main-search'>
          <input name='search' placeholder='Search' type='text' />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </fieldset>
        <div className='search-results'>
          <h2>Results</h2>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'><i className='fas fa-map-marker-alt' /></span>
              <a href='#'>Olympus Mons</a>
              <span className='description'>18.65&deg;N, 226.2&deg;E</span>
            </li>
            <li>
              <span className='fa-li'><i className='fas fa-map-marker-alt' /></span>
              <a href='#'>Valles Marineris</a>
              <span className='description'>13.9&deg;S, 59.2&deg;W</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
