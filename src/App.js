import React from 'react'

import OPMap from './components/OPMap'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchResults: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleChange (e) {
    const { value } = e.target
    this.setState({ searchTerm: value })
  }

  handleSearch () {
    const { searchTerm } = this.state
    if (!searchTerm || searchTerm === '') {
      console.log('No search term provided')
    } else {
      global.fetch(`https://codemacabre.carto.com/api/v2/sql?q=SELECT cartodb_id, name, ST_X(ST_Centroid(the_geom)) as LONG, ST_Y(ST_Centroid(the_geom)) AS lat FROM opmbuilder.opm_499_mars_nomenclature_polygons WHERE name ~* '.*${searchTerm}.*'`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.rows)
          this.setState({
            searchResults: data.rows
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  render () {
    const { searchResults } = this.state

    return (
      <div className='app-container'>
        <Sidebar onClick={this.handleSearch} onChange={this.handleChange} results={searchResults} />
        <OPMap results={searchResults} />
      </div>
    )
  }
}

export default App
