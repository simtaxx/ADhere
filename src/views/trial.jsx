import React, { useState } from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb';
import TrialCards from './trialCard.json'
import TrialCard from '../components/ui/trialCard'

console.log(TrialCards)
const CardsArray = Object.values(TrialCards)

const Trial= () => {

  const [checkState, setCheckState] = useState( CardsArray.slice( 0, 8 ) )
  const [checkPage, setCheckPage] = useState( 2 )
  
  const paginationNext = () => {
    let CardsArrayCopyBase = JSON.parse(JSON.stringify(CardsArray))
    let CardsArrayCopyUp = CardsArrayCopyBase
    if ( checkPage === 1 ) {
      CardsArrayCopyUp = CardsArrayCopyBase
      CardsArrayCopyUp = CardsArrayCopyUp.slice(0, 8)
      setCheckPage( 2 )
      setCheckState( CardsArrayCopyUp )
    }
    else if ( checkPage === 2 ) {
      CardsArrayCopyUp = CardsArrayCopyBase
      CardsArrayCopyUp = CardsArrayCopyUp.slice(9, 17)
      setCheckPage( 3 )
      setCheckState( CardsArrayCopyUp )
    } else if ( checkPage === 3 ) {
      CardsArrayCopyUp = CardsArrayCopyBase
      CardsArrayCopyUp = CardsArrayCopyUp.slice(17, 25)
      setCheckPage( 4 )
      setCheckState( CardsArrayCopyUp )
    }
  } 
  const paginationPrevious = () => {
    let CardsArrayCopyBase = JSON.parse(JSON.stringify(CardsArray))
    let CardsArrayCopyUp = CardsArrayCopyBase
    if ( checkPage === 4 ) {
      CardsArrayCopyUp = CardsArrayCopyBase
      CardsArrayCopyUp = CardsArrayCopyUp.slice(9, 17)
      console.log("1 1",checkPage)
      setCheckPage( 3 )
      setCheckState( CardsArrayCopyUp )
      console.log("1 2",checkPage)
    } else if ( checkPage === 3 ) {
      CardsArrayCopyUp = CardsArrayCopyBase
      CardsArrayCopyUp = CardsArrayCopyUp.slice(0, 8)
      console.log("2 2",checkPage)
      setCheckPage( 2 )
      setCheckState( CardsArrayCopyUp )
      console.log("2 2",checkPage)
    } else if ( checkPage === 2 ) {
      CardsArrayCopyUp = CardsArrayCopyBase
      CardsArrayCopyUp = CardsArrayCopyUp.slice(0, 8)
      console.log("2 2",checkPage)
      setCheckPage( 1 )
      setCheckState( CardsArrayCopyUp )
      console.log("2 2",checkPage)
    }
    console.log("WHAT THE HECK", checkPage)
  }
  return(
    <div class="Epreuve">
      <Header title="Audience"></Header>
      <div className="big-gap">
        <h2>Épreuves disponible aux dates séléctionnées</h2>
        <h3>Choisisez les épreuves qui vous intéressent</h3>
        <p class="description">Plus la correspondance est élevée plus le public touché correspondra a votre audience ciblé</p>
        <form>
          <div className="input-container--flex" >
            { checkState.map( card => {
              return <TrialCard title={card.title} subtitle={card.subtitle} icon={card.icon} />
            }) }
          </div>
        </form>
        <span className="previous-arrow" onClick={ paginationPrevious }></span>
        <span className="next-arrow" onClick={ paginationNext }></span>
        <Breadcrumb isActive="trial"></Breadcrumb>
      </div>
    </div>
  )
}

export default Trial