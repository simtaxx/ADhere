import React, { useState, useEffect } from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb';
import TrialCards from './trialCard.json'
import TrialCard from '../components/ui/trialCard'
import Save from '../components/ui/save'


const Trial= () => {
  const [idPage , setIdPage] = useState(0)
  const [cards , setCards] = useState(0)
  const creatCardModel = (card, i) => {
    let model = {...card, checked: false , key: 'card__' + i}
    return model
  }

  const cardsBycard = () => {
    let newCards = [[]]
    let current = 0
      Object.values(TrialCards).forEach( (card, i) => {
        if ( 7 < newCards[current].length ) {
          newCards.push([])
          current++
        }
        newCards[current].push( creatCardModel(card , i))
    });
    setCards(newCards)
  }

  useEffect(()=>{
    if (!cards){
      cardsBycard()
    }
  })

  const setNewValue = (i) => {
    let newCards = JSON.parse(JSON.stringify(cards))
    newCards[idPage][i].checked = newCards[idPage][i].checked ? false : true 
    setCards(newCards)
  }

  return (
    <div className="Epreuve">
    <Header title="Audience"></Header>
    <div className="big-gap">
      <h2>Épreuves disponible aux dates séléctionnées</h2>
      <h3>Choisisez les épreuves qui vous intéressent</h3>
      <p className="description">Plus la correspondance est élevée plus le public touché correspondra a votre audience ciblé</p>
      <form>
        <div className="input-container--flex" >
          {
            cards[idPage] ?         
            cards.find((e,id)=> idPage === id ).map( (trialCard, i) => {
              return <TrialCard {...trialCard} setNewValue={()=>{ setNewValue(i) }} />
            })
            : ''
          }
        </div>
        <Save/>
      </form>
      <span className="previous-arrow" onClick={ () => setIdPage( idPage > 0 ? idPage - 1 : idPage) }></span>
      <span className="next-arrow" onClick={ () => setIdPage( idPage < 2 ? idPage + 1 : idPage) }></span>
      <Breadcrumb pathRef="trial" />
    </div>
  </div>
  )
}

// onClick={ () => setState( true ) } key={ `${key}-${page}` } classProps={ check() }  title={card.title} subtitle={card.subtitle} icon={card.icon} 

export default Trial