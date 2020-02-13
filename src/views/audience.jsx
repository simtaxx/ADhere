import React from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'

const Audience = () => {
  
  return(
    <div className="audience">
      <Header title="Audience"></Header>
      <div className="big-gap">
        <h2>Audience de votre campagne</h2>
        <h3>Créez votre audience</h3>
        <p className="description">Définissez qui doit voir votre affichage</p>
        <form>
          <div className="input-container">
            <p className="placeholder">Entrez le nom de votre audience</p>
            <input className="input-text" type="text"/>
          </div>
          <div className="input-container--flex">
            <div className="input-container">
              <p className="placeholder">Age minimum</p>
              <input className="input-text" type="text"/>
            </div>
            <div className="input-container">
              <p className="placeholder">Age maximum</p>
              <input className="input-text" type="text"/>
            </div>
          </div>
          <div className="input-container--flex">
            <div className="input-container">
              <select name="" id="">
                <option value="">Sexe</option>
                <option value="ref1">Homme</option>
                <option value="ref2">Femme</option>
                <option value="ref2">Truc chelou</option>
              </select>
            </div>
            <div className="input-container">
              <select name="" id="">
                <option value="">Catégorie socio-professionnelle</option>
                <option value="ref1">Homme</option>
                <option value="ref2">Femme</option>
                <option value="ref2">Truc chelou</option>
              </select>
            </div>
          </div>
        </form>
        <Breadcrumb pathRef="audience"/>
      </div>
    </div>
  )
}

export default Audience