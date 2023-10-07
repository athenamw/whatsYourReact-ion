import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Resume from './components/Resume'


function App() {

  return (
    <div>
      <Sidenav/>
      <Main />
      <Portfolio />
      <Contact />
      <Resume />
    </div>
  )
}
 

export default App
