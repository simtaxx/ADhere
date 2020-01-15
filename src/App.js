import React from 'react'

import './assets/scss/general.scss'

import HeaderContext from './store/headerContext'
import Header from './components/layouts/header'
import Routes from './components/router/router'


const App = () => {
  
  return (
    <div className="App">
      <HeaderContext.Provider value="Accueil">
        <Header />
      </HeaderContext.Provider>
      <Routes></Routes>
    </div>
  );
}
export default App
