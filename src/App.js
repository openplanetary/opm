import React from 'react'

import OPMap from './components/OPMap'
import Sidebar from './components/Sidebar'

class App extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <Sidebar />
        <OPMap />
      </div>
    )
  }
}

export default App
