import React from 'react'

type Props = {
  car: any
}

const Card = (props: Props) => {

  return (
    <div className='card'>
        {/* <div className="image-wrapper"> */}
          <img className='car-image' src={props.car.imageUrl} alt="Car image not available" onError={(e) => {
            // console.log(e.target.src);
            e.target.src = 'https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/usedcar/no-car-image-with-text.svg'
            e.target.classList.add('no-image')
          }} />
        {/* </div> */}
      <div className='car-data'>

        <h2 className='car-name'>{props.car.carName}</h2>
        <span className='car-details'>
          {props.car.km}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          {props.car.fuel}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          {props.car.cityName}
        </span>
        <div className='car-pricing'>
          <h1 className='car-price'>Rs.&nbsp;{props.car.price}</h1>
          <span className='car-emi'>{props.car.emiText}</span>
        </div>
        <button className='car-get-seller-details-btn'>
          <span>
            Get Seller Details
          </span>
        </button>
      </div>
    </div>
  )
}

export default Card