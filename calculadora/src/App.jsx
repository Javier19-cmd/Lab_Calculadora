// Se instaló Babel: npm install @babel/preset-env
// Se instaló React: npm install @babel/preset-react
// Se instaló testing-library: npm install --save-dev @testing-library/react
// Se instaló el ambiente de jest: npm install --dev jest-environment-jsdom
// Se instaló el dom: npm install --save-dev @testing-library/jest-dom
// Se instaló el user event: npm install --save-dev @testing-library/user-event @testing-library/dom
// Se instaló el transform runtime: npm install @babel/plugin-transform-runtime
// Se instaló jest: npm install -g jest
// Se instaló el plugin de react para eslint: npm i --save-dev eslint-plugin-react
// Se puso en el extends de .eslintrc.js esto: 'plugin:react/recommended'
// Para correr el ambiente, se escribe: npm run dev
// Para que las instancias funcionen, se tienen que hacer acá.

// Referencias:
// Tutorial de como hacer una calculadroa
// 1. https://www.youtube.com/watch?v=CMwt6Nwjf9g&ab_channel=BetoMoedano
// 2. https://www.youtube.com/watch?v=56fX1h_b1H0&ab_channel=BetoMoedano
// 3. Arreglando los imports: https://lifesaver.codes/answer/import-extensions-missing-file-extension-after-upgrade-to-v2-19-1-1573
// Eliminar resultado y settear op1 para el resultado y op2 limpiarlo para el nuevo resultado.

import React, { useState } from 'react'
import './App.css'
import suma from './operaciones/suma'
import resta from './operaciones/resta'
import multiplicacion from './operaciones/multiplicacion'

function App() {
  const [op1, setOp1] = useState('') // Estado de los botones de la calculadora. Guarda el primer valor.
  const [op2, setOp2] = useState('') // Estado de los botones de la calculadora. Guarda el segundo valor.
  const [operacion, setOperacion] = useState('') // Estado que guarda las operaciones.

  // Asignando el número en la pantalla de la calculadora.
  const numero = (e) => {
    if (operacion === '') {
      // Si no se ha seleccionado una operación, entonces se settea el primer número.
      const entrada = op1 + e// Variable a analizar.
      if (entrada.length <= 9) {
        setOp1(entrada) // Setteando el primer número en la pantalla.
        // console.log('Longitud válida')
      }
    } else {
      // Esto pasa si ya se seleccionó un operando.
      const entr = op2 + e // Variable a analizar.
      if (entr.length <= 9) {
        setOp2(entr) // Setteando el segundo número en la pantalla.
        // console.log('Longitud válida')
      }
    } 
  }

  // Esta función guarda la operación que el usuario presionó.
  const opera = (e) => {
    if (operacion === '') {
      setOperacion(e) // Se guarda el operando que se presionó.
      // Si en caso no se seleccionó una operación, entonces se pone la operación en el estado.
    } else {
      // Si en caso ya hay una operación se settea en otro estado la operación actual.
      results()
      setOperacion(e) // Setteando la operación a seguir.
    }
  }

  // Método que limpia la pantalla de la calculadora.
  const borrar = () => {
    setOp1('')
    setOp2('')
    setOperacion('')

  }

  // Función que lee las operaciones presionadas.
  const results = () => {
    if (operacion === '+') { // Apartado de la suma.
      // Este manda a llamar a la suma desde el arhivo suma,
      // que se encuentra en la carpeta de operaciones.
      
      const res = suma(Number(op1), Number(op2))
      // Llenando op1.
      setOp1(res)
      setOp2('')
      setOperacion('')


    } else if (operacion === '-') { // Apartado de la resta.
      // Este manda a llamar a la operación resta, que se encuentra en la carpeta de operaciones.
      const res = resta(Number(op1), Number(op2))
      // Llenando op1.
      setOp1(res)
      setOp2('')
      setOperacion('')
    } else if (operacion === '*') { // Apartado de la multiplicación.
      // Este manda a llamar a la operación multiplicación,
      // que se encuentra en la carpeta de operaciones.
      // Este manda a llamar a la operación resta, que se encuentra en la carpeta de operaciones.
      const res = resta(Number(op1), Number(op2))
      // Llenando op1.
      setOp1(res)
      setOp2('')
      setOperacion('')
    }
  }

  return (
    <div className='App'>

      {/* Div para el display de la calculadora */}
      <div className='Pantalla'>
        {/* Imprime el resultado o la operación */}
        {/* Si hay un resultado, entonces se enseña el resultado, si no hay resultado
        se analiza primero si ya se presionó un número y una operación para poder
        imprimir el segundo número */}
        <div className='current'>{op2 || op1}</div>
      </div>

      <div className='Calculadora'>
        { /* Div para los botones de la calculadora */ }
        { /* Botón para el cero */ }
        <button className='Cero' onClick= { () => { numero(0) } } >0</button>
        { /* Botón para el uno */ }
        <button className='Uno' onClick= { () => { numero(1) } } >1</button>
        { /* Botón para el dos */ }
        <button className='Dos' onClick= { () => { numero(2) } } >2</button>
        { /* Botón para el tres */ }
        <button className='Tres' onClick= { () => { numero(3) } } >3</button>
        { /* Botón para el cuatro */ }
        <button className='Cuatro' onClick={ () => { numero(4) } }>4</button>
        { /* Botón para el seis */ }
        <button className='Cinco' onClick= { () => { numero(5) } } >5</button>
        { /* Botón para el siete */ }
        <button className='Seis' onClick= { () => { numero(6) } } >6</button>
        { /* Botón para el siete */ }
        <button className='Siete' onClick= { () => { numero(7) } } >7</button>
        { /* Botón para el ocho */ }
        <button className='Ocho' onClick= { () => { numero(8) } } >8</button>
        { /* Botón para el nueve */ }
        <button className='Nueve' onClick= { () => { numero(9) } } >9</button>
        { /* Botón para el más */ }
        <button className='Mas' onClick= { () => { opera('+') } } >+</button>
        { /* Botón para el menos */ }
        <button className='Menos' onClick= { () => { opera('-') } } >-</button>
        { /* Botón para la multiplicación */ }
        <button className='Multiplicacion' onClick= { () => { opera('*') } } >x</button>
        { /* Botón para la igualdad */ }
        <button className='Igual' onClick= { results } >=</button>
        { /* Botón para borrar */ }
        <button className='Borrar' onClick= { borrar } >C</button>
      </div>
    </div>
  )
}

export default App
