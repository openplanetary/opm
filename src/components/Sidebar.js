import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import SearchResult from '../components/SearchResult'
import OPLogo from '../../dist/assets/op-logo-2019-dark@2x.png'

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSidebarActive: false
    }
    this.handleSidebar = this.handleSidebar.bind(this)
  }

  handleSidebar () {
    console.log(this.state.isSidebarActive)
    this.setState(state => ({
      isSidebarActive: !state.isSidebarActive
    }))
  }

  render () {
    const { isSidebarActive } = this.state
    const { onChange, onClick, onKeyDown, results, filters } = this.props

    let searchResults
    if (results.length > 0) {
      searchResults = results.map(item => (
        <SearchResult key={item.cartodb_id} name={item.name} lat={item.lat} long={item.long} geom={item.geometry} />
      ))
    }

    return (
      <React.Fragment>
        <button className={isSidebarActive ? 'sidebar-button inactive' : 'sidebar-button active'} onClick={this.handleSidebar}>
          <FontAwesomeIcon className='sidebar-caret' icon={faCaretRight} transform={isSidebarActive ? { rotate: 0 } : { rotate: 180 }} />
        </button>
        <div className={isSidebarActive ? 'sidebar-container opened' : 'sidebar-container closed'}>
          <img className='logo' src={OPLogo} alt='OpenPlanetary Logo' />
          <fieldset className='main-search'>
            <input onChange={onChange} onKeyDown={onKeyDown} id='search' name='search' placeholder='Search' type='text' />
            <button onClick={onClick}><FontAwesomeIcon icon={faSearch} /></button>
          </fieldset>
          <fieldset className='search-filters'>
            <input filters={filters} type='checkbox' id='nom' name='nom' value='nomenclature' />
            <label htmlFor='nom'>Nomenclature</label>
            <input filters={filters} type='checkbox' id='quad' name='quad' value='quadrangles' />
            <label htmlFor='quad'>Quadrangles</label>
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
      </React.Fragment>
    )
  }
}

Sidebar.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  results: PropTypes.array
}

export default Sidebar
