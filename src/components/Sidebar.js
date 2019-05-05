import React from 'react'

class Sidebar extends React.Component {
  render () {
    return (
      <div className='sidebar-container'>
        <fieldset>
          <legend>Search for a place on Mars</legend>
          <input type='text' name='search' />
          <button><i className='fas fa-search' /></button>
        </fieldset>
      </div>
    )
  }
}

export default Sidebar
