import { useState } from 'react'
import Formulario from './formulario'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Formulario imc="p"></Formulario>
    </>
  )
}

export default App
