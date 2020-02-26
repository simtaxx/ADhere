import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import Save from '../ui/save'

const NewMission = () => {
  
  const [ dataForm, setDataForm ] = useState({})
  const form = useRef()
  const begin = useRef()
  const end = useRef()

  const saveData = () => {
    console.log(begin)
  }
  
  return(
    <div className="newMission">
      <h3>Commencez une nouvelle mission</h3>
      <p className="description">Choisissez le nom et la période de votre mission</p>
      <form onSubmit={ saveData() } ref={ form }>
        <label className="input-container">
          <p className="placeholder">Entrez le nom de votre prochaine mission</p>
          <input className="input-text description" autoFocus type="text" name="missionName"/>
        </label>
        <div className="input-container--flex">
          <div className="input-container">
            <input className="input-date" type="date" name="begin" ref={ begin }/>
          </div>
          <div className="input-container">
            <input className="input-date" type="date" name="end" ref={ end }/>
          </div>
        </div>
        <Save data={ dataForm } category="missionData"/>
        <Link to="/audience/audience">
          <input className="input-button" type="button" value="CONTINUER"/>
        </Link>
      </form>
    </div>
  )
}

export default NewMission