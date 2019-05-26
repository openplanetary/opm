import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import SearchResult from '../components/SearchResult'
import OPLogo from '../../dist/assets/op-logowtxt-dark.svg'

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
    const { isSidebarActive } = this.state
    const { onChange, onClick, onKeyDown, results } = this.props

    let searchResults
    if (results.length > 0) {
      searchResults = results.map(item => (
        <SearchResult key={item.cartodb_id} name={item.name} lat={item.lat} long={item.long} />
      ))
    }

    return (
      <div className='sidebar-container'>
        <img className='logo' src={OPLogo} alt='OpenPlanetary Logo' />
        <button className='sidebar-button' onClick={this.handleSidebar}>
          <FontAwesomeIcon className='sidebar-caret' icon={faCaretLeft} transform={isSidebarActive ? { rotate: 0 } : { rotate: 180 }} />
        </button>
        <fieldset className='main-search'>
          <input onChange={onChange} onKeyDown={onKeyDown} id='searchNom' name='search' placeholder='Search' type='text' />
          <button onClick={onClick}><FontAwesomeIcon icon={faSearch} /></button>
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

Sidebar.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  results: PropTypes.array
}

export default Sidebar
