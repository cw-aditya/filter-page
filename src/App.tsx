import { useEffect, useState } from 'react'
import './styles/App.css'
import Title from './components/title.component'
import SideBar from './components/sidebar.component'
import MainLayout from './layouts/main.layout'
import MainContent from './components/mainContent.component'
import { globalContext } from './utilities/contexts'
import { log } from 'console'

function App() {

  const [context, setContext] = useState({
    data: {},
    filters: {
      budget: {
        min: 0,
        max: 1,
      },
      fuelType: []
    }
  })
  console.log(context);
  function UpdateContext(values: any){
    console.log(values);
    setContext(values)
  }

  async function fetchData() {
    let data = await fetch('/data.json').then((res)=> {return res.json()}).then((data)=>{
      return data
    })
    console.log(data);
    setContext({...context, data})
    
  }

  useEffect(()=>{
    async function call() {
      await fetchData()
    }
    call()
  },[])

  return (
    <>
      <globalContext.Provider value={{ context, setContext: UpdateContext }}>
        <main>
          <Title />
          <MainLayout>
            <SideBar />
            <MainContent />
          </MainLayout>
        </main>
        </globalContext.Provider >
      </>
  )
}

      export default App
