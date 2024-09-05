import React from 'react'
import '@/styles/MainContent.css'
import { useContext } from 'react'
import { globalContext } from '@/utilities/contexts'
import Card from './Card.component'
import { log } from 'console'


type Props = {}

const MainContent = (props: Props) => {
  const GContext = useContext(globalContext);
  const Data = GContext?.context.data
  console.log("Data", Data);
  
  return (
    <div className='main-content'>
      {Data? Data?.['stocks']?.map((car:any)=>{
        <Card key={car.profileId} car={car} />
      }): <></>}
    </div>
  )
}


export default MainContent