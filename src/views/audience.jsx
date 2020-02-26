import React from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'
import Save from '../components/ui/save'
import SexeSelect from '../components/ui/sexeSelect'
import { useState } from 'react'

const Audience = () => {

  const sexe = [ 'Homme', 'Femme', 'Indifférent' ]
  const age = [ '0-4','5-9','10-14','15-19','20-24','25-29','30-34','35-39','40-44','45-49','50-54','55-59','60-64','65-69','70-74','75-79','80+','tout', ]
  const csp = [ 'Agriculteur','cadres et profession intel.','profession intermediaire','Ouvrier','Employé','non actif','Retraité','Tout' ]

  const [ buttonData, setButtonData ] = useState( [] )
  
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