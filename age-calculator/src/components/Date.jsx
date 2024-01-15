import React, { useState } from 'react';
import Result from './Result';
import '../css/Calculator.css'

export default function Date({handleCalculate}) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayError, setDayError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');

  const age = (day, month, year) => {
    let errors = {
      day: '',
      month: '',
      year: '',
    };

    if (day <= 0 || day > 31 || !day) errors.day = 'Must be a valid day';
    if (month < 1 || month > 12 || !month) errors.month = 'Must be a valid month';
    if (year > 2024  || !year) errors.year = 'Must be in the past';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dayValue = e.target.day.value;
    const monthValue = e.target.month.value;
    const yearValue = e.target.year.value;

    const errors = age(dayValue, monthValue, yearValue);

    setDayError(errors.day);
    setMonthError(errors.month);
    setYearError(errors.year);

    if (!errors.day && !errors.month && !errors.year) {
      handleCalculate();
    }
  };

  return (
    <div className='principal'>
      <div className='date-contain'>
        <form onSubmit={handleSubmit}>
          <div className='div'>
            <div className='day'>
              <label htmlFor='day'  className='day'>
                Day 
                <input
                  type='number'
                  name='day'
                  id='day'
                  className='input'
                  value={day}
                  onChange={(event) => setDay(event.target.value)}
                />
              <span role='alert' className='alert'>{dayError}</span>
              </label>
            </div>
            <div className='month'>
              <label htmlFor='month' className='month'>
                Month 
                <input
                  type='number'
                  name='month'
                  id='month'
                  className='input'
                  value={month}
                  onChange={(event) => setMonth(event.target.value)}
                />
                <span role='alert' className='alert'>{monthError}</span>
              </label>
            </div>
            <div className='year'>
              <label htmlFor='year'  className='year'>
                Year 
                <input
                  type='number'
                  name='year'
                  className='input'
                  id='year'
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                />
                <span role='alert' className='alert'>{yearError}</span>
              </label>
            </div>
          </div>
          <Result 
            year={year} 
            month={month} 
          />
        </form>
      </div>
    </div>
  );
}