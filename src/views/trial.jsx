import React from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb';
import TrialCards from './trialCard.json'
import TrialCard from '../components/ui/trialCard'

console.log(TrialCards)
const CardsArray = Object.values(TrialCards)

const trial= () => {
  
  return(
    <div class="Epreuve">
      <Header title="Audience"></Header>
      <div className="big-gap">
        <h2>Épreuves disponible aux dates séléctionnées</h2>
        <h3>Choisisez les épreuves qui vous intéressent</h3>
        <p class="description">Plus la correspondance est élevée plus le public touché correspondra a votre audience ciblé</p>
        <form>
          <div className="input-container--flex">
            { CardsArray.map( card => {
              return <TrialCard title={card.title} subtitle={card.subtitle} icon={card.icon} />
            }) }
          </div>
        </form>
        <Breadcrumb isActive="trial"></Breadcrumb>
      </div>
    </div>
  )
}

export default trial