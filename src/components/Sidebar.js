import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSidebarActive: false
    }
    this.handleSearch = this.handleSearch.bind(this)
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

  handleSearch () {
    const searchQuery = document.querySelector('#searchNom').value
    if (!searchQuery || searchQuery === '') {
      console.log('No search term provided')
    } else {
      global.fetch(`https://codemacabre.carto.com/api/v2/sql?q=SELECT name FROM opmbuilder.opm_499_mars_nomenclature_polygons WHERE name ~* '.*${searchQuery}.*'`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
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
          <input id='searchNom' name='search' placeholder='Search' type='text' />
          <button onClick={this.handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        </fieldset>
        <div className='search-results'>
          <h2>Results</h2>
          <ul className='fa-ul'>
            <li>
              <span className='fa-li'><i className='fas fa-map-marker-alt' /></span>
              <a href='#'>Olympus Mons</a>
              <span className='description'>18.65&deg;, 226.2&deg;</span>
            </li>
            <li>
              <span className='fa-li'><i className='fas fa-map-marker-alt' /></span>
              <a href='#'>Valles Marineris</a>
              <span className='description'>-13.9&deg;, -59.2&deg;</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar
