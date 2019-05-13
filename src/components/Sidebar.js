import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faSearch } from '@fortawesome/free-solid-svg-icons'

import SearchResult from '../components/SearchResult'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSidebarActive: false,
      results: []
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
    // const searchResults = document.querySelector('#results')
    if (!searchQuery || searchQuery === '') {
      console.log('No search term provided')
    } else {
      global.fetch(`https://codemacabre.carto.com/api/v2/sql?q=SELECT cartodb_id, name, ST_X(ST_Centroid(the_geom)) as LONG, ST_Y(ST_Centroid(the_geom)) AS lat FROM opmbuilder.opm_499_mars_nomenclature_polygons WHERE name ~* '.*${searchQuery}.*'`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.rows)
          this.setState({
            results: data.rows
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  render () {
    const { isSidebarActive, results } = this.state
    console.log(isSidebarActive)

    let searchResults
    if (results.length > 0) {
      searchResults = results.map(item => (
        <SearchResult key={item.cartodb_id} name={item.name} lat={item.lat} long={item.long} />
      ))
    }

    return (
      <div className='sidebar-container'>
        <button className='sidebar-button' onClick={this.handleSidebar}>
          <FontAwesomeIcon className='sidebar-caret' icon={faCaretLeft} transform={isSidebarActive ? { rotate: 0 } : { rotate: 180 }} />
        </button>
        <fieldset className='main-search'>
          <input id='searchNom' name='search' placeholder='Search' type='text' />
          <button onClick={this.handleSearch}><FontAwesomeIcon icon={faSearch} /></button>
        </fieldset>
        <div className='info-container'>
          <div className={results.length > 0 ? 'search-results visible' : 'search-results hidden'}>
            <h2>Results</h2>
            <ul id='results' className='fa-ul'>
              {searchResults}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
