import React from 'react'
import '../css/Formulario.css'
export default function Lista(props) {
    const {texto} = props;
  return (
    <div className='list'>
        <img src="./src/assets/images/icon-list.svg" alt="icono" className='icon-list'/>
        <p className='text-1'>{texto}</p>
    </div>
  )
}
