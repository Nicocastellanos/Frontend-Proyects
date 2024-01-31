import React from 'react'
import { Link } from 'react-router-dom';

export default function New(props) {
  const {titulo, text} = props;
  return (
    <div className='new-container'>
        <h2 className='title-new'><Link className='link'></Link>{titulo}</h2>
        <p className='p-new1'>{text}</p>
    </div>
  )
}
