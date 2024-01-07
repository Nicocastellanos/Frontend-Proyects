import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Lista from './Lista';
import '../css/Formulario.css'

export default function Formulario() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
    setMessage(login(email))
    }, [email])
    
    const login = (email) =>{
        if(!email.includes('@') && !email.includes('.com') ){
            return 'Valid email required'
        }
    }

    const submitDisable = message;

  return (
    <div className='form-box'>
         
            <div className='form-content'> 
                    <h1 className='title'>Stay updated!</h1>
                    <p className='text-1'>Join 60.000+ projects managers receiving monthly updates on: </p>
                    <Lista texto="Product discovery and building what matters"/>
                    <Lista texto="Measuring to ensure updates are a success"/>
                    <Lista texto="And much more!"/>
                
                <form className='form' onSubmit={e=>{
                e.preventDefault()
                const email = e.target.email.value;
                login(email);
                }}>
                <div className='label'>
                    <label htmlFor="email" className='email'>Email Address: <span role='alert' className='alert'>{message}</span>
                    <input 
                        type="text"
                        className='input'
                        placeholder='email@company.com'
                        id='email'
                        name='email'
                        value={email} 
                        onChange={event => setEmail(event.target.value)}
                    /> 
                    </label>
                    
                </div>
                    <button type='submit' disabled={submitDisable} className='button-send'><Link to='/emailSend' className='link'>Subscribe to monthly newsletter</Link></button>
                </form>
            </div>
            <img src="./src/assets/images/illustration-sign-up-desktop.svg" alt="image" className='imagen'/>
        </div>
  )
}
