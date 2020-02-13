import React from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'

import Map from '../components/modules/map/map'

const Audience = () => {
  
  return(
    <div className="audience">
      <Header title="Gares"></Header>
      <div className="small-gap">
        <div className="semi-container">
          <h2>Localisation des épreuves et séléction des gares</h2>
          <h3>Sélectionnez les événement qui vous conviennent</h3>
          <p className="description">Vous pourrez après choisir les gares a proximité où vous pourrez afficher votre  publicité </p>
        </div>
        <div className="semi-container">
          <Map height= "400px" eventLocationData= "" iconUrl= ""></Map>
          <Breadcrumb pathRef="stations" />
        </div>
      </div>
    </div>
  )
}

export default Audience