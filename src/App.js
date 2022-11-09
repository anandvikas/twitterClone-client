import React from 'react'
import ContentBar from './components/ContentBar'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'



const App = () => {

  return (
    <div className='flex-Row'>
      <NavBar />
      <ContentBar />
      <SideBar />
    </div>
  )

}

export default App