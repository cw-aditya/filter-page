import React from 'react'
import { useContext } from 'react'
import { globalContext } from '@/utilities/contexts'

type Props = {
    car: any
}

const Card = (props: Props) => {
const GContext = useContext(globalContext);
  return (
    <div className='card'>
        <img src={props.car.imageUrl} alt="" />
        Hi
    </div>
  )
}

export default Card