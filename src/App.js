import React from 'react'

import OPMap from './components/OPMap'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mousePosLng: 0,
      mousePosLat: 0,
      searchFilters: [],
      searchResults: [],
      searchTerm: ''
    }
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  handleSearchTermChange (e) {
    const { value } = e.target
    this.setState({ searchTerm: value })
  }

  handleMouseMove (e) {
    this.setState({
      mousePosLng: e.latlng.lng.toFixed(3),
      mousePosLat: e.latlng.lat.toFixed(3)
    })
  }

  handleSearch () {
    const { searchTerm, searchFilters } = this.state
    if (!searchTerm || searchTerm === '') {
      console.log('No search term provided')
    } else {
      // searchFilters.forEach(dataset => {
      //   console.log(dataset)
      // })
      global.fetch(`https://codemacabre.carto.com/api/v2/sql?q=SELECT cartodb_id, ST_AsGeoJSON(the_geom) AS geometry, name, ST_X(ST_Centroid(the_geom)) AS long, ST_Y(ST_Centroid(the_geom)) AS lat FROM opmbuilder.opm_499_mars_nomenclature_polygons WHERE name ~* '.*${searchTerm}.*'`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            searchResults: data.rows
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  onKeyDown (e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      this.handleSearch()
    }
  }

  render () {
    const { mousePosLat, mousePosLng, searchResults } = this.state

    return (
      <div className='app-container'>
        <Sidebar onClick={this.handleSearch} onKeyDown={this.onKeyDown} onChange={this.handleSearchTermChange} results={searchResults} filters={this.handleFilters} />
        <OPMap onMouseMove={this.handleMouseMove} results={searchResults} mousePosLat={mousePosLat} mousePosLng={mousePosLng} />
      </div>
    )
  }
}

export default App
