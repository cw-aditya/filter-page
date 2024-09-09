import { useEffect, useState } from 'react'
import './styles/App.css'
import Title from './components/title.component'
import SideBar from './components/sidebar.component'
import MainLayout from './layouts/main.layout'
import MainContent from './components/mainContent.component'
import AllContexts from './components/AllContexts.component'

function App() {



  return (
    <>
      <AllContexts>
        <main>
          <Title />
          <MainLayout>
            <SideBar />
            <MainContent />
          </MainLayout>
        </main>
      </AllContexts>

    </>
  )
}

export default App
