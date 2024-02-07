import '../Css/Form.Css'

export default function Card(props) {
  const {name, numberCard, date, year, cvc} = props;
  const nameText = name ? name : 'Jane Appleseed'
  const numberText = numberCard ? numberCard : '0000 0000 0000 0000'
  const dateText = date ? date : '00'
  const yearText = year ? year : '00' 
  const cvcText = cvc ? cvc : '000'
  
  return (
    
      <div className="cards">
        <div className='card-1'>
          <div className='text-1'>
            <p className='number'>{numberText}</p>
            <div className='name-date'>
              <p className='name'>{nameText}</p>
              <p className='date'>{dateText} <span>/</span> <span>{yearText}</span></p> 
            </div>
          </div>
        </div>
  
        <div className='card-2'>
          <p className='cvc-text'>{cvcText}</p>
          <img src="./src/assets/images/bg-card-back.png" alt="" className='img'/>
        </div>
        </div>
      
  )
}
