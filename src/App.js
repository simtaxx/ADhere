import React from 'react'

import './assets/scss/general/reset.scss'
import './assets/scss/general/app.scss'

import Routes from './components/router/router'


const App = () => {
  
  return (
    <React.Fragment className="App">
      <Routes></Routes>
    </React.Fragment>
  );
}
export default App
