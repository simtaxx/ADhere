import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './assets/scss/general/reset.scss'
import './assets/scss/general/app.scss'

import Routes from './components/router/router'

import Header from './components/layouts/header'

function App() {


  React.useEffect (() => {
    console.log('lourd')
}, [])

  
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
