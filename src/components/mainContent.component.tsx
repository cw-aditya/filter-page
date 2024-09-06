import React from 'react'
import '@/styles/MainContent.css'
import { useContext } from 'react'
import { globalDataContext, globalContext} from '@/utilities/contexts'
import Card from './Card.component'
import { log } from 'console'


type Props = {}

const MainContent = (props: Props) => {
  const GlobalDataContext = useContext(globalDataContext);
  const GlobalContext = useContext(globalContext);
  const Data = GlobalDataContext?.data
  // console.log("Data", Data);

  return (
    <>
      <div className='main'>

        <div className="top-filter">
          <div className="sort-by">
            <p className='sort-label'>Sort By:</p>
            <select name="sort-by" id="sort-by" className='sort-by-select' value={GlobalContext?.context.filters.sortBy} onChange={(e)=>{
                        var copy = JSON.parse(JSON.stringify(GlobalContext?.context))
                        copy.filters.sortBy = e.target.value
                        GlobalContext?.setContext(copy)
                    }} >
              <option value="so=-1&sc=-1">Best Match</option>
              <option value="so=0&sc=2">Price - Low to High</option>
              <option value="so=1&sc=2">Price - High to Low</option>
            </select>
          </div>
        </div>
        <div className='main-content'>
          {Data ? Data?.['stocks']?.map((car: any) => {
            // console.log(car.profileId);

            return (
              <Card key={car.profileId} car={car} />
            )
          }) : <></>}
        </div>
      </div>
    </>
  )
}


export default MainContent