import React, { useState } from 'react'

export default function Form2({previousStep, nextStep}) {
  const [selectPlan, setSelecPlan] = useState(null)

  const handlePlan = (plan)=>{
     setSelecPlan(plan)
  }
  return (
    <div>
        <h1>Select your plan</h1>
        <p>you have the opion of monthly or yearly billing</p>
        <ul>
          <img src="./src/assets/images/icon-arcade.svg" alt="arcade" />
          <li onClick={() => handlePlan('Arcade')}
          className={selectPlan === 'Arcade' ? 'select' : ''}> Arcade <span>$9/mo</span></li>
          <img src="" alt="" />
          <li onClick={() => handlePlan('Advanced')}
          className={selectPlan === 'Advanced' ? 'select' : ''}> Advanced <span>$12/mo</span></li>
          <img src="" alt="" />
          <li></li>
        </ul>
        <button onClick={previousStep}>Go back</button>
        <button type='button' onClick={nextStep}>Next step</button>
    </div>
  )
}
