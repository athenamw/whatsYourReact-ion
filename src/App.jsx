import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Portfolio from './components/Portfolio'



function App() {

  return (
    <div>
      <Sidenav/>
      <Main />
      <Portfolio />
    </div>
  )
}
 

export default App
