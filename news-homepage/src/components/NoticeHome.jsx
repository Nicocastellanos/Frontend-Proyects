import React from 'react'
import '../Css/Home.css'
import { Link } from 'react-router-dom';

export default function Notice(props) {
  const {number, title, text, img} = props;
  return (
    <div className='box-notice'>
      <img src={img} alt="image" className='image'/>
        <div className='notice'>
          <button className='button-notice'>
            <Link to ="/popular" className='link'>
              <h1 className='title-notice'>{number}</h1> 
              <h2 className='title-notice-1'>{title}</h2>
              <p className='p-notice'>{text}</p>
            </Link>
           </button>
        </div>
    </div>
  )
}
