import React from 'react'
import { useContext } from 'react'
import { globalContext } from '@/utilities/contexts'


type Props = {}

const BudgetFilter = (props: Props) => {
    const GContext = useContext(globalContext);
    return (
        <>
            {/* Title */}
            <span>
                <h4 className='filter-label'>Budget</h4>
            </span>
            <div className='budget'>

                {/* Min */}
                <div className='budget-selector'>
                    <input type="number" name="budget-min" id="budget-min" value={GContext?.context.filters.budget.min} onChange={(e)=>{
                        var copy = JSON.parse(JSON.stringify(GContext?.context))
                        copy.filters.budget.min = Number(e.target.value)
                        GContext?.setContext(copy)
                    }} />
                    <h5 className='filter-unit'>Lakh</h5>
                </div>
                <h5 className='hyphen'>-</h5>
                {/* Max */}
                <div className='budget-selector'>
                <input type="number" name="budget-max" id="budget-max" value={GContext?.context.filters.budget.max} onChange={(e)=>{
                        var copy = JSON.parse(JSON.stringify(GContext?.context))
                        copy.filters.budget.max = Number(e.target.value)
                        GContext?.setContext(copy)
                    }} />
                    <h5 className='filter-unit'>Lakh</h5>
                </div>
            </div>
        </>
    )
}

export default BudgetFilter