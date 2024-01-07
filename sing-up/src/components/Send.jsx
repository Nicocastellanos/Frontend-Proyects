import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Send.css'
export default function Send() {
  return (
  <div className='box'>
    <div className='send'> 
    <img src="./src/assets/images/icon-list.svg" alt="icon" className='icon' />
        <h1 className='title'> Thanks for subscribing!</h1>
        <p className='text'>A confirmation email has been sent to ash@loremcompany.com. 
         Please open it and click the button inside to confirm your subscription.</p>
        <button className='button'><Link to='/' className='link'>Dismiss message</Link> </button>
    </div>
  </div>
  )
}
