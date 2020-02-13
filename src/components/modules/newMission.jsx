import React from 'react'
import { Link } from 'react-router-dom'

const newMission = () => {
  
  return(
    <div className="newMission">
      <h3>Commencez une nouvelle mission</h3>
      <p className="description">Choisissez le nom et la période de votre mission</p>
      <form>
        <div className="input-container">
          <p className="placeholder">Entrez le nom de votre prochaine mission</p>
          <input className="input-text description" autoFocus type="text"/>
        </div>
        <div className="input-container--flex">
          <div className="input-container">
            <input className="input-date" type="date"/>
          </div>
          <div className="input-container">
            <input className="input-date" type="date"/>
          </div>
        </div>
        <label className="input-checkbox-container">
          <p>Consulter l’intégralité de la compétition</p>
          <input className="input-checkbox" type="checkbox"/>
          <span className="checkmark"></span>
        </label>
        <Link to="/audience/audience">
          <input className="input-button" type="button" value="CONTINUER"/>
        </Link>
      </form>
    </div>
  )
}

export default newMission