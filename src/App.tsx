import { useEffect, useState } from 'react'
import './styles/App.css'
import Title from './components/title.component'
import SideBar from './components/sidebar.component'
import MainLayout from './layouts/main.layout'
import MainContent from './components/mainContent.component'
import { globalContext, globalDataContext } from './utilities/contexts'
import { log } from 'console'

function App() {

  const [context, setContext] = useState({
    filters: {
      budget: {
        min: 0,
        max: 21,
      },
      fuelType: [],
      sortBy: 'best-match'
    }
  })
  const [data, setData] = useState({})
  function UpdateContext(values: any) {
    // console.log(values);
    setContext(values)
  }

  async function fetchData(api:string) {
    let data = await fetch(api).then((res) => { return res.json() }).then((data) => {
      return data
    })
    // console.log(data);
    setData(data)

  }

  useEffect(() => {
    async function call() {
      var baseUrl = '/api/stocks?'
      baseUrl += `budget=${context.filters.budget.min}-${context.filters.budget.max}`
      if(context.filters.fuelType.length>0){
        baseUrl = baseUrl + '&fuel=' +`${context.filters.fuelType.join('+')}`
      }
      baseUrl += `&${context.filters.sortBy}`

      // console.log(baseUrl);
      await fetchData(baseUrl)
      
    }
    call()
  }, [context])

  return (
    <>
      <globalDataContext.Provider value={{ data }}>
        <globalContext.Provider value={{ context, setContext: UpdateContext }}>
          <main>
            <Title />
            <MainLayout>
              <SideBar />
              <MainContent />
            </MainLayout>
          </main>
        </globalContext.Provider >
      </globalDataContext.Provider >
    </>
  )
}

export default App
