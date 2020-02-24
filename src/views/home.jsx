import React from 'react'

import Header from '../components/layouts/header'
import NewMission from '../components/modules/newMission'
import History from '../components/modules/history'
import AxiosGet from '../components/mixins/axios'

const Home = () => {
  
  AxiosGet('https://jsonplaceholder.typicode.com/todos/1')

  return(
    <div className="home">
      <Header title="Accueil"></Header>
      <div className="big-gap">
        <h2 className="hello">Bonjour Lise !</h2>
        <NewMission></NewMission>
        <History></History>
      </div>
    </div>
  )
}

export default Home