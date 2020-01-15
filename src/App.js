import React from 'react'

import './assets/scss/general/reset.scss'
import './assets/scss/general/app.scss'

import Routes from './components/router/router'

import Header from './components/layouts/header'

function App() {
  
  return (
    <React.Fragment className="App">
      <Header></Header>
      <Routes></Routes>
    </React.Fragment>
  );
}
export default App
