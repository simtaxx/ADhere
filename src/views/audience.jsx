import React from 'react'
import { useForm } from 'react-hook-form'

import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'
import Save from '../components/ui/save'

const Audience = () => {

  const { register, handleSubmit } = useForm()

  const saveData = (data) => {
    localStorage.setItem('audienceData', JSON.stringify(data));
  }
  
  return(
    <div className="audience">
      <Header title="Audience"></Header>
      <div className="big-gap">
        <h2>Audience de votre campagne</h2>
        <h3>Créez votre audience</h3>
        <p className="description">Définissez qui doit voir votre affichage</p>
        <form onSubmit={handleSubmit(saveData)}>
          <div className="input-container">
            <p className="placeholder">Entrez le nom de votre audience</p>
            <input className="input-text" type="text" name="audienceName" ref={register({ required: true })}/>
          </div>
          <div className="input-container--flex">
            <div className="input-container">
              <p className="placeholder">Age minimum</p>
              <input className="input-text" type="text" name="audienceAgeMin" ref={register({ required: true })}/>
            </div>
            <div className="input-container">
              <p className="placeholder">Age maximum</p>
              <input className="input-text" type="text" name="audienceAgeMax" ref={register({ required: true })}/>
            </div>
          </div>
          <div className="input-container--flex">
            <div className="input-container">
              <select  name="audienceSexe" ref={register({ required: true })}>
                <option value="">Sexe</option>
                <option value="ref1">Homme</option>
                <option value="ref2">Femme</option>
              </select>
            </div>
            <div className="input-container">
              <select name="audienceCSP" ref={register({ required: true })}>
                <option value="">Catégorie socio-professionnelle</option>
                <option value="ref1">Agriculteur</option>
                <option value="ref2">Cadre et profession intel.</option>
                <option value="ref3">Profession intermédiaire</option>
                <option value="ref4">Employé</option>
                <option value="ref5">Ouvrier</option>
                <option value="ref6">Retraité</option>
                <option value="ref7">Non actif</option>
              </select>
            </div>
          </div>
          <Save/>
        </form>
        <Breadcrumb pathRef="audience" />
      </div>
    </div>
  )
}

export default Audience