import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Save from '../ui/save'

const NewMission = () => {
  
  const { register, handleSubmit } = useForm()
  const [ dataForm, setDataForm ] = useState({})

  const saveData = (data) => {
    localStorage.setItem('missionData', JSON.stringify(data));
    setDataForm(data)
  }

  return(
    <div className="newMission">
      <h3>Commencez une nouvelle mission</h3>
      <p className="description">Choisissez le nom et la période de votre mission</p>
      <form onSubmit={ handleSubmit(saveData) }>
        <label className="input-container">
          <p className="placeholder">Entrez le nom de votre prochaine mission</p>
          <input className="input-text description" autoFocus type="text" name="missionName" ref={register({ required: true })}/>
        </label>
        <div className="input-container--flex">
          <div className="input-container">
            <input className="input-date" type="date" name="dateStart" ref={register({ required: true })}/>
          </div>
          <div className="input-container">
            <input className="input-date" type="date" name="dateEnd" ref={register({ required: true })}/>
          </div>
        </div>
        <Save />
        <Link to="/audience/audience">
          <input className="input-button" type="button" value="CONTINUER"/>
        </Link>
      </form>
    </div>
  )
}

export default NewMission