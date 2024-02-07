import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../Css/Form.Css'

export default function Form() {
    const [name, setName] = useState('');
    const [numberCard, setNumberCard] = useState('     ');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [cvc, setCvc] = useState('');
    const [nameError, setNameError] = useState('');
    const [numberCardError, setNumberCardError] = useState('');
    const [dateError, setDateError] = useState('');
    const [cvcError, setCvcError] = useState('');

    useEffect(() => {
        setNameError(card(name, 'name'));
        setNumberCardError(card(numberCard, 'numberCard'));
        setDateError(card(date, 'date'));
        setCvcError(card(cvc, 'cvc'));
    }, [name, numberCard, date, year, cvc]);

    const card = (value, fieldName) => {
        const trimmedValue = value.replace(/\s/g, '');

        if (!trimmedValue) {
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        }
    
        if (fieldName === 'numberCard' && isNaN(Number(trimmedValue))) {
            return 'Wrong format, numbers only';
        }

        if ((fieldName === 'date' || fieldName === 'year') && (date.length === 0 && year.length === 0)) {
            return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} can't be blank`;
        }

        if ((fieldName === 'cvc') && (cvc.length > 3)) {
            return 'only 3 numbers'
        }
        return '';
    };
  return (
    <div className='principal-box'>
        <div className='background'>
      <Card name={name} numberCard={numberCard} date={date} year={year} cvc={cvc}></Card>
        </div>
        <form onSubmit={e=>{
            e.preventDefault()
            const name = e.target.name.value
            const numberCard = e.target.numberCard.value
            const date = e.target.date.value
            const year = e.target.year.value
            const cvc = e.target.cvc.value
            card(name, numberCard, date, year, cvc)
        }} className='form'>
            <label htmlFor="name" className='label'>
                CARDHOLDER NAME
                <input 
                    type="text"
                    placeholder='e.g Jane Appleseed'
                    name='name'
                    value={name}
                    className='input'
                    onChange={event => setName(event.target.value)} 
                />
                <span role='alert' className='alert'>{nameError}</span>
            </label>
            <label htmlFor="numberCard" className='label'>
                CARD NUMBER
                <input 
                    type="text"
                    placeholder='e.g 9090 3523 9085 1238'
                    name='numberCard'
                    value={numberCard}
                    className='input'
                    onChange={event => setNumberCard(event.target.value)} 
                />
                 <span role='alert' className='alert'>{numberCardError}</span>
            </label>
            <div className='label-date-cvc'>
                    <label htmlFor="date" className='label-date'>
                        EXP. DATE (MM/YY)
                    <div className='date-box'>
                            <input 
                                type="text"
                                placeholder='MM'
                                name='date'
                                value={date}
                                className='input-date'
                                onChange={event => setDate(event.target.value)} 
                            />
                            <input 
                                type="text"
                                placeholder='YY'
                                name='year'
                                value={year}
                                className='input-date'
                                onChange={event => setYear(event.target.value)} 
                            />            
                    </div>
                    </label>
                
            <div className='cvc-box'>
                <label htmlFor="cvc" className='label-cvc'>
                    CVC
                    <input 
                        type="text"
                        placeholder='e.g 123'
                        name='cvc'
                        value={cvc}
                        className='input-cvc'
                        onChange={event => setCvc(event.target.value)} 
                    />
                    <span role='alert' className='cvc-error'>{cvcError}</span>
                </label>
            </div>
        </div>
            <span role='alert' className='date-error'>{dateError}</span>
        <button className='button' type='submit'>Confirm</button>
        </form>
    </div>
  )
}
