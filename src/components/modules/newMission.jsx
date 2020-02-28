import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import Save from '../ui/save'

const NewMission = () => {
  
  const { register, handleSubmit } = useForm()
  const [ dataForm, setDataForm ] = useState({})
  const begin = useRef()
  const end = useRef()

  const saveData = (e) => {
    e.preventDefault()
    let date = [ begin.current.value, end.current.value ]
    localStorage.setItem("dateMission", JSON.stringify(date))
  }

  return(
    <div className="newMission">
      <h3>Commencez une nouvelle mission</h3>
      <p className="description">Choisissez le nom et la période de votre mission</p>
      <form>
        <label className="input-container">
          <p className="placeholder">Entrez le nom de votre prochaine mission</p>
          <input className="input-text description" autoFocus type="text" name="missionName" ref={register({ required: true })}/>
        </label>
        <div className="input-container--flex">
          <div className="input-container">
            <input className="input-date" type="date" name="begin" ref={begin}/>
          </div>
          <div className="input-container">
            <input className="input-date" type="date" name="end" ref={end}/>
          </div>
        </div>
        <input onClick={ saveData } className="input-button" type="submit" value="SAUVEGARDER"/>
        <Link to="/audience/audience">
          <input className="input-button" type="button" value="CONTINUER"/>
        </Link>
      </form>
    </div>
  )
}

export default NewMission