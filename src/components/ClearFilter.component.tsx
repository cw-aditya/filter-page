import React, {useContext, useState} from 'react'
import { globalContext } from '@/utilities/contexts'

import { DefualtGlobalContextState } from '@/utilities/defaultStates'

type Props = {}

const ClearFilter = (props: Props) => {
    let GlobalContext = useContext(globalContext)
  return (
    <div className='clear-filter'>
        <div>
            <img src="/filter-svgrepo-com.svg" alt="Filter Icon" width={18} height={18} />
            <span>Filter</span>
        </div>
        <button onClick={() => {
            // console.log("Hii");
            
            GlobalContext?.setContext(DefualtGlobalContextState)
        }}>Clear All</button>
    </div>
  )
}

export default ClearFilter