import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Peticion } from './components/Peticion'
import { Condicion } from './components/Condicion'

function App() {
  const [count, setCount] = useState('')
  console.log(count)
  const [buscarPersonaje, setBuscarPersonaje] = useState ('')
  console.log(buscarPersonaje)

  return (
    <>
    <h1>Hola Mund</h1>
      <Condicion condicion={setCount}/>
      <Condicion condicion={setBuscarPersonaje}/>

      <Peticion buscarPersonaje={buscarPersonaje}/>
    </>
  )
}

export default App
