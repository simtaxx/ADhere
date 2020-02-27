import React, { useState, useEffect } from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'
import Save from '../components/ui/save'
import SexeSelect from '../components/ui/sexeSelect'
import AxiosGet from '../components/mixins/axios'

const Audience = () => {

  const sexe = [ 'Homme', 'Femme', 'Indifférent' ]
  const age = [ '0-4','5-9','10-14','15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80+','tout', ]
  const csp = [ 'Agriculteur','cadres et profession intel.','profession intermediaire','Ouvrier','Employé','non actif','Retraité','Tout' ]

  const [ buttonData, setButtonData ] = useState( [] )

  const setParamsUp = () => {
    let data = Object.values(JSON.parse(localStorage.getItem("missionData")))
    let newParams = {}
    for (let i = 0; i < data.length; i++) {
      if (i === 0) {
        console.log("title")
      } else if (i === 1) {
        newParams.begin = data[1]
      } else if (i === 2) {
        newParams.end = data[2]
      }
    }
    return newParams
  }

  let formatedParams = setParamsUp()
  const [ dataEvents, setDataEvents ] = useState( [] )
  const [ params, setParams ] = useState( formatedParams )
 
  setParamsUp()

  useEffect( () => {
    ( async () => {
      const resultEvents = await AxiosGet( 'http://127.0.0.1:8000/events', {params})
      setDataEvents(resultEvents.data)
      console.log(dataEvents)
    })()
  }, [params]);
  
  return(
    <div className="audience">
      <Header title="Audience"></Header>
      <div className="big-gap">
        <h2>Audience de votre campagne</h2>
        <h3>Créez votre audience</h3>
        <form>
          <h3>Choisissez le sexe de votre audience</h3>
          <div className="button-flex-container">
            {     
              sexe.map( (sexe, index) => {
                return <SexeSelect category="sexe" title={ sexe } data={ buttonData } setData={ setButtonData } key={ index } />
              })
            }
          </div>
          <h3>Choisissez la ou les tranches d'âges de votre audience</h3>
          <div className="button-flex-container">
            {      
              age.map( (age, index) => {
                return <SexeSelect category="age" title={ age } data={ buttonData } setData={ setButtonData } key={ index }/>
              })
            }
          </div>
          <h3>Choisissez la ou les catégories socio professionelles de votre audience</h3>
          <div className="button-flex-container">
            {      
              csp.map( (csp, index) => {
                return <SexeSelect category="csp" title={ csp } data={ buttonData } setData={ setButtonData } key={ index }/>
              })
            }
          </div>
          <Save data={ buttonData } category="audienceData"/>
        </form>
        <Breadcrumb pathRef="audience" />
      </div>
    </div>
  )
}

export default Audience