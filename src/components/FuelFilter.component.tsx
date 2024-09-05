import React from 'react'
import { useContext } from 'react'
import { globalContext } from '@/utilities/contexts'


type Props = {}

const FuelFilter = (props: Props) => {
    const GContext = useContext(globalContext);

    const FuelTypes: string[] = [
        "Petrol",
        "Diesel",
        "Cng",
        "Lpg",
        "Electric",
        "Hybrid"

    ]

    return (
        <>
            {/* Title */}
            <span>
                <h4 className='filter-label'>Fuel</h4>
            </span>
            <div className='fuel'>
                {FuelTypes.map((fuelType, i) => {
                    return (
                            <div key={i+1} className='fuel-selector'>
                                <input type="checkbox" name={fuelType} id={fuelType} checked={GContext?.context.filters.fuelType.includes(i+1)} onChange={(e) => {
                                    var copy = JSON.parse(JSON.stringify(GContext?.context))
                                    if(e.target.checked){
                                        copy.filters.fuelType.push(i+1)
                                    } else {
                                        copy.filters.fuelType = copy.filters.fuelType.filter((x: number) => x != (i+1))
                                    }
                                    GContext?.setContext(copy)
                                }} />
                                <h5 className='fuel-unit'>{fuelType}</h5>
                            </div>
                    )
                })}
            </div>
        </>
    )
}

export default FuelFilter