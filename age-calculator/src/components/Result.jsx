import React, { useState } from 'react';
import '../css/Calculator.css'

export default function Result({ day, month, year}) {
  const [yearResult, setYearResult] = useState(<p className='text'><span className='line'>--</span> years</p>);
  const [monthResult, setMonthResult] = useState(<p className='text'><span className='line'>--</span> months</p>);
  const [dayResult, setDayResult] = useState(<p className='text'><span className='line'>--</span> days</p>);

  const handleCalculate = () => {
    setYearResult(isNaN(year) ? <p className='text'><span className='line'>--</span> years</p> : <p className='text'><span className='line'>{2024 - year}</span> years</p>);
    setMonthResult(isNaN(month) ? <p className='text'><span className='line'>--</span> months</p> : <p className='text'><span className='line'>{12 - month}</span> months</p>);
    setDayResult(isNaN(day) ? <p className='text'><span className='line'>--</span> days</p> : <p className='text'><span className='line'>{day + month}</span> days</p>);
  };


  return (
    <div>
      <div className='button-container'>
        <hr className='hr'/>
        <button onClick={handleCalculate} className='button'>
          <img src='./src/assets/images/icon-arrow.svg' alt='button' className='img'/>
        </button>
      </div>
        {yearResult}
        {monthResult}
        {dayResult}
    </div>
  );
}
