import React from 'react'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar-container'>
        <fieldset className='main-search'>
          <input name='search' placeholder='Search' type='text' />
          <button><i className='fas fa-search' /></button>
        </fieldset>
      </div>
    )
  }
}

export default Sidebar
