import React from 'react'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'

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

            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
            <label class="input-button-container">
              <p>Halterophilie</p>
              <input class="input-button-trial" type="button"/>
              <span class="button-trial"></span>
            </label>
          </div>
        </form>
        <Breadcrumb isActive="trial"></Breadcrumb>
      </div>
    </div>
  )
}

export default trial