import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Pokedex from './Pokedex'
import viteLogo from '/vite.svg'
import Header from './Header'
import Pokemon from './Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Pokedex/>
      <Pokemon/>
    </>
  )
}

export default App
