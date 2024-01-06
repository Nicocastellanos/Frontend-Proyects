import React, { useState } from 'react'
import '../css/Header.css'
export default function Header(props) {
  const {titulo, descripcion} = props
  const [showInfo, setShowInfo] = useState(false)

  const handleShowInfo = () =>{
    setShowInfo(!showInfo)
  }
  return (
    <div className='card'>
      <div className='title'>
        <h3>{titulo}</h3>
        <button onClick={handleShowInfo} className='buttons'>
          <img src={`./src/assets/images/icon-${showInfo ? 'minus' : 'plus'}.svg`} alt={showInfo ? 'minimizar' : 'mostrar'} className='icons' />
        </button>
      </div>  
        {showInfo && (
          <p className='description'>{descripcion}</p>
        )}
    </div>
  );
}
