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
      document.body.classList.add('sidebar-active')
    } else {
      document.body.classList.remove('sidebar-active')
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
          <FontAwesomeIcon className='sidebar-caret' icon={faCaretLeft} transform={isSidebarActive ? { rotate: 180 } : { rotate: 0 }} />
        </button>
        <fieldset className='main-search'>
          <input name='search' placeholder='Search' type='text' />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </fieldset>
      </div>
    )
  }
}

export default Sidebar
