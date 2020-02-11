import React from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'

const Audience = () => {
  
  return(
    <div class="audience">
      <Header title="Audience"></Header>
      <div class="big-gap">
        <h2>Audience de votre campagne</h2>
        <h3>Créez votre audience</h3>
        <p class="description">Définissez qui doit voir votre affichage</p>
        <form>
          <div class="input-container">
            <p class="placeholder">Entrez le nom de votre audience</p>
            <input class="input-text" type="text"/>
          </div>
          <div class="input-container--flex">
            <div class="input-container">
              <p class="placeholder">Age minimum</p>
              <input class="input-text" type="text"/>
            </div>
            <div class="input-container">
              <p class="placeholder">Age maximum</p>
              <input class="input-text" type="text"/>
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
        <Breadcrumb isActive="audience" />
      </div>
    </div>
  )
}

export default Audience