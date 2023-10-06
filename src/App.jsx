import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <Sidenav/>
      <Main />
      <Portfolio />
      <Contact />
    </div>
  )
}
 

export default App
