import React from 'react'
import '../Css/Home.css'

export default function Principal() {
  return (
    <div className='principal'>
        <img src="./src/assets/images/image-web-3-desktop.jpg" alt="image" className='img'/>
        <div className='text-box'>
            <h1 className='title-info'>The Bright Future of Web 3.0?</h1>
            <div className='text '>
                <p className='p-info'> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
                <button className='button-info'>R E A D  M O R E</button>
            </div>
        </div>
    </div>
  )
}
