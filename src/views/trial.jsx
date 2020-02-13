import React, { useState } from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb';
import TrialCards from './trialCard.json'
import TrialCard from '../components/ui/trialCard'


const Trial= () => {

  const cardsArray = Object.values(TrialCards)

  const makePagination = (array, per_page) => {
    let arrayPaginated = [[]]
    let i = 0

    array.forEach(card => {
      if ( arrayPaginated[i].length < per_page) {
        arrayPaginated[i].push(card)
      } else {
        i++
        arrayPaginated.push([])
      }
    });
    return arrayPaginated
  }

  const makeStateArray = (array) => {
    let arrayState = [[]]

    for(let i = 1; i < array.length ; i++) {
      if ( array[i].length > i) {
        arrayState.push([])
      }
    }
    return arrayState
  }
  const arrayPage = makePagination(cardsArray, 8)
  const [array] = useState( arrayPage )
  const [page, setPage] = useState( 0 )
  const [state, setState] = useState( false )
  console.log(makeStateArray(arrayPage))

  const nextPage = () => {
    if (page === 0) {
      setPage( 1 )
    } else if ( page === 1 ) {
      setPage( 2 )
    }
  }

  const previousPage = () => {
    if (page === 2) {
      setPage( 1 )
    } else if ( page === 1 ) {
      setPage( 0 )
    }
  }

  const check = () => {
    if ( state ) {
      return 'button-trial is-active'
    } else {
      return 'button-trial'
    }
  }

  return(
    <div className="Epreuve">
      <Header title="Audience"></Header>
      <div className="big-gap">
        <h2>Épreuves disponible aux dates séléctionnées</h2>
        <h3>Choisisez les épreuves qui vous intéressent</h3>
        <p className="description">Plus la correspondance est élevée plus le public touché correspondra a votre audience ciblé</p>
        <form>
          <div className="input-container--flex" >
            { array[page].map( (card, key) => {
              return <TrialCard onClick={ () => setState( true ) } key={ `${key}-${page}` } classProps={ check() }  title={card.title} subtitle={card.subtitle} icon={card.icon} />
            }) }
          </div>
        </form>
        <span className="previous-arrow" onClick={ () => previousPage() }></span>
        <span className="next-arrow" onClick={ () => nextPage() }></span>
        <Breadcrumb pathRef="trial"></Breadcrumb>
      </div>
    </div>
  )
}

export default Trial