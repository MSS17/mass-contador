import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  // const incrementarContador = () =>{
  //   setContador(contador + 1)
  // }
  // const decrementarContador = () =>{
  //   setContador(contador + 1)
  // }
  // const restablecerContador = () =>{
  //   setContador(0)
  // }
  return (
    <>
      
      <h1>Ejercicio 2 Contador</h1>
      <div className="container">
        <div className="card">
          <div className="card-Header">
            <p className='counter'>{contador}</p>
          </div>
          <div className="card-body">
            <button className='subtract-btn' onClick={() => setContador(contador-1)}>-</button>
            <button className='reset-btn' onClick={() => setContador(0)}>Restablecer</button>
            <button className='add-btn' onClick={() => setContador(contador+1)}>+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
