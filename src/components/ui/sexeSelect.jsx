import React, { useState, useRef } from 'react'

const SexeSelect = ({ category, title, data, setData, key }) => {

  const [checked, setChecked] = useState( false )
  const useRefButton = useRef()
  let buttonData = []
  const handleChange = (e) => {
    setChecked( e.current.checked )
  }

  const returnData = (value, e) => {

    if ( e.current.checked ) {
      buttonData.push({value, category})
    } else {
      setData(data.splice({value, category}))
    }

    setData(data.concat(buttonData))
    console.log(data)

    // feature unselect
  }

  const check = (value, e) => {
    handleChange(e)
    returnData(value, e)
  }

  return(
    <label className={`input-button-audience-container input-button-audience-container--${category}`}>
      <input defaultChecked={ checked } onChange={()=>{ check( title, useRefButton ) }} className="input-button-sexe" name={ title } type="checkbox" ref={ useRefButton } />
      <span className={ checked ? "button-sexe is-active" : "button-sexe" }>
        <div className="button-text">
          <p className="title-card">{title}</p>
        </div>
      </span>
    </label>
  )
}

export default SexeSelect