import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2';
export default function Controller() { 

  const[steps, setSteps] = useState(1)

  const nextStep = () =>{
    setSteps(steps + 1);
  }

  const previousStep = ()=>{
    setSteps(steps - 1);
  }
  return (
    <div>
        {steps === 1 && <Form1 nextStep={nextStep}/>}
        {steps === 2 && <Form2 nextStep={nextStep} previousStep = {previousStep}/>}
    </div>
  )
}
