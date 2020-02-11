import React from 'react'

import Header from '../components/layouts/header'
import NewMission from '../components/modules/newMission'
import History from '../components/modules/history'

const Home = () => {
  
  return(
    <div class="home">
      <Header title="Accueil"></Header>
      <div class="big-gap">
        <h2 class="hello">Bonjour Lise !</h2>
        <NewMission></NewMission>
        <History></History>
      </div>
    </div>
  )
}

export default Home