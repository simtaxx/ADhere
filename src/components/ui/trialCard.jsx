import React from 'react'

const TrialCard = ({ classProps, title, subtitle, icon }) => {

  const onChangeFavorite = (event)  => {
    console.log(event.target.checked);
  };

  return(
    <label className="input-button-container">
      <input onChange={ onChangeFavorite } className="input-button-trial" type="checkbox"/>
      <span className={ classProps }>
        <div className="button-text">
          <p className="title-card">{title}</p>
          <p className="subtitle-card">{subtitle}</p>
        </div>
        <img className="icon-card" src={require(`../../assets/icons/sports/${icon}.png`) } alt="sport"/>
      </span>
    </label>
  )
}

export default TrialCard