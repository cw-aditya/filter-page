import { React, useState, useEffect } from 'react'
import { globalContext, globalDataContext } from '@/utilities/contexts'
import { DefualtGlobalContextState } from '@/utilities/defaultStates'
// 

type Props = {
    children: React.ReactNode
}

const AllContexts = (props: Props) => {
    const [context, setContext] = useState(DefualtGlobalContextState)
    const [data, setData] = useState({fetchedData: {}, filteredData: {}})
    enum fuelType {
        'Petrol'=1,
        'Diesel',
        'Cng',
        'Lpg',
        'Electric',
        'Hybrid'

    }
    function UpdateContext(values: any) {
        // console.log(values);
        setContext(values)
        console.log(data.fetchedData);
        
        if(data?.fetchedData?.stocks == null) return
        let stockData = JSON.parse(JSON.stringify(data.fetchedData))
        stockData.stocks = stockData?.stocks.filter((car: any) => {
            let inBudget = (values.filters.budget.min * 100000 <= car.priceNumeric) && (car.priceNumeric <= values.filters.budget.max * 100000);
            let fuelInt = fuelType[car.fuel as keyof typeof fuelType]

            let validFuelType = values.filters.fuelType.length > 0 ? values.filters.fuelType.includes(fuelInt) : true;
            return (inBudget && validFuelType)
        })

        switch (values.filters.sortBy) {
            case 'price-low-to-high':
                stockData.stocks = stockData.stocks.sort((a, b) => a.priceNumeric - b.priceNumeric);
                break;
            case 'price-high-to-low':
                stockData.stocks = stockData.stocks.sort((a, b) => b.priceNumeric - a.priceNumeric);
                break;
            default:
                break;
        }

        setData({ ...data, filteredData: stockData })

    }

    async function fetchData(api: string) {
        let data = await fetch(api).then((res) => { return res.json() }).then((data) => {
            return data
        })
        // console.log(data);
        setData({ fetchedData: data, filteredData: data })

    }



    useEffect(() => {
        async function call() {
            // console.log('Fetching Data ...');

            let baseUrl = 'http://localhost:5173/data.json'
            // baseUrl += `budget=${context.filters.budget.min}-${context.filters.budget.max}`
            // if(context.filters.fuelType.length>0){
            //   baseUrl = baseUrl + '&fuel=' +`${context.filters.fuelType.join('+')}`
            // }
            // baseUrl += `&${context.filters.sortBy}`

            // console.log(baseUrl);
            await fetchData(baseUrl)

        }
        call()
    }, [])
    return (
        <globalDataContext.Provider value={{ data }}>
            <globalContext.Provider value={{ context, setContext: UpdateContext }}>
                {props.children}
            </globalContext.Provider >
        </globalDataContext.Provider >
    )
}

export default AllContexts