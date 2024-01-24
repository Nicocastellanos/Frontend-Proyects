import React, { useEffect, useState } from 'react'

export default function Form1( {nextStep} ) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(login(name,email,number))
  }, [name,email,number])
  
  const login = () => {
    if (name.length <= 3) {
      setMessage('Name must be longer than 3 characters');
    } else if (!email.includes('@') || !email.includes('.com')) {
      setMessage('Valid email required');
    } else if (number.length !== 11 || !number.includes('+1')) {
      setMessage('Valid number required');
    } else{
      setMessage('');
      nextStep();
    }
  };

  return (
  <>
    <div>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number. </p>
      <form onSubmit={e=> {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        login(name, email, number);
        }}>
        
        <label htmlFor="name"> Name
          <input 
            type="text"
            className=''
            placeholder= "e.g. Stephen King"
            id='name'
            name='name'
            value={name}
            onChange={event=> setName(event.target.value)} 
          />
        </label>
        <label htmlFor="email"> Email 
          <input 
            type="text"
            className=''
            placeholder= "e.g stephen.king@gmail.com"
            id='email'
            name='email'
            value={email}
            onChange={event => setEmail(event.target.value)} 
          />
        </label>
        <label htmlFor="number"> Phone Number
          <input 
            type="text"
            className=''
            placeholder= "+1 234 567 890"
            id='number'
            name='number'
            value={number}
            onChange={event => setNumber(event.target.value)} 
          />
        </label>
        <span role='alert' className='alert'>{message}</span>
        <button type='button' onClick={login}>Next step</button>
      </form>
    </div>
  </>
  )
}
