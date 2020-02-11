import React from 'react'
import { Link } from 'react-router-dom'

const newMission = () => {
  
  return(
    <div class="newMission">
      <h3>Commencez une nouvelle mission</h3>
      <p class="description">Choisissez le nom et la période de votre mission</p>
      <form>
        <div class="input-container">
          <p class="placeholder">Entrez le nom de votre prochaine mission</p>
          <input class="input-text description" autoFocus type="text"/>
        </div>
        <div class="input-container--flex">
          <div class="input-container">
            <input class="input-date" type="date"/>
          </div>
          <div class="input-container">
            <input class="input-date" type="date"/>
          </div>
        </div>
        <label class="input-checkbox-container">
          <p>Consulter l’intégralité de la compétition</p>
          <input class="input-checkbox" type="checkbox"/>
          <span class="checkmark"></span>
        </label>
        <Link to="/audience">
          <input class="input-button" type="button" value="CONTINUER"/>
        </Link>
      </form>
    </div>
  )
}

export default newMission