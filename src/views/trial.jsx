import React, { useState, useEffect } from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb';
import TrialCards from './trialCard.json'
import TrialCard from '../components/ui/trialCard'
import Save from '../components/ui/save'
import AxiosGet from '../components/mixins/axios'



const Trial= () => {
  const [idPage , setIdPage] = useState(0)
  const [cards , setCards] = useState(0)
  const [dataLocal, setDataLocal] = useState( [] )
  const [dataDetails, setDataDetails] = useState( [] )
  const [dataCsp, setDataCsp] = useState( [] )
  const [dataEvents, setDataEvents] = useState( [] )

  const setDetailsParams = () => {
    let { data } = JSON.parse(localStorage.getItem("audienceData"))
    let newParams = {}
    data.forEach(element => {
      if ( element.category === "sexe" ) {
        newParams.sexe = newParams.sexe + ',' + element.value.substring(0,1)
      } else if ( element.category === "age" ) {
        newParams.ageRanges = newParams.ageRanges + ',' +  element.value
      } else if ( element.category === "csp" ) {
        newParams.federationIds = 1
      }
    })
    return newParams
  }

  const setEventsParams = () => {
    let { data } = JSON.parse(localStorage.getItem("missionData"))
    let newParams = {}
    /* data.forEach(element => {
      if ( element.begin ) {
        newParams.begin = element.begin
      } else if ( element.end ) {
        newParams.end =  element.end
      }
    }) */
    console.log(localStorage.getItem("missionData"))
    return newParams
  }

  let formatedParams = setDetailsParams()
  let formatedParamsEvents = setEventsParams()
  const [ params, setParams ] = useState( formatedParams )
  const [ paramsCsp, setParamsCsp ] = useState( {
    federationIds: "1"
  } )
  const [ paramsEvents, setParamsEvents ] = useState( formatedParamsEvents )
  let pourcentage = 10

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
 
  useEffect( () => {
    ( async () => {
      const resultDetails = await AxiosGet( 'http://127.0.0.1:8000/federationDetails', {params})
      setDataDetails(resultDetails.data);
      const resultCsp = await AxiosGet( 'http://127.0.0.1:8000/federationCsp', {paramsCsp})
      setDataCsp(resultCsp.data);
      const resultEvents = await AxiosGet( 'http://127.0.0.1:8000/events', {paramsEvents})
      console.log(resultEvents.data)
      setDataCsp(resultEvents.data);
    })()
  }, [params, paramsCsp, paramsEvents]);

  useEffect(() => {
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
              return <TrialCard {...trialCard} pourcentage={ pourcentage } setNewValue={()=>{ setNewValue(i) }} />
            })
            : ''
          }
        </div>
        <Save/>
      </form>
      <span className="previous-arrow" onClick={ () => setIdPage( idPage > 0 ? idPage - 1 : idPage) }></span>
      <span className="next-arrow" onClick={ () => setIdPage( idPage < 5 ? idPage + 1 : idPage) }></span>
      <Breadcrumb pathRef="trial" />
    </div>
  </div>
  )
}

export default Trial