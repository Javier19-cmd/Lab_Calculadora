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

import { useState } from 'react'
import './App.css'
import suma from './operaciones/suma'
import resta from './operaciones/resta'
import multiplicacion from './operaciones/multiplicacion'

function App() {
  const [op1, setOp1] = useState('') // Estado de los botones de la calculadora. Guarda el primer valor.
  const [op2, setOp2] = useState('') // Estado de los botones de la calculadora. Guarda el segundo valor.
  const [op3, setOp3] = useState('')
  const [operacion, setOperacion] = useState('') // Estado que guarda las operaciones.
  const [newOperacion, setNewOperacion] = useState('')
  const [resultado, setResultdado] = useState(0) // Estado que guarda los resultados.

  // Asignando el número en la pantalla de la calculadora.
  const numero = (e) => {
    if (operacion === '') {
      // Si no se ha seleccionado una operación, entonces se settea el primer número.
      setOp1(op1 + e) // Setteando el primer número en la pantalla.
    } else if (newOperacion === '') {
      // Esto pasa si ya se seleccionó un operando.
      setOp2(op2 + e) // Setteando el segundo número en la pantalla.
    } else {
      setOp3(op3 + e)
    }
  }

  // Esta función guarda la operación que el usuario presionó.
  const opera = (e) => {
    if (operacion === '') {
      setOperacion(e) // Se guarda el operando que se presionó.
      // Si en caso no se seleccionó una operación, entonces se pone la operación en el estado.
    } else {
      // Si en caso ya hay una operación se settea en otro estado la operación actual.
      setNewOperacion(e)
    }
  }

  // Método que limpia la pantalla de la calculadora.
  const borrar = () => {
    setOp1('')
    setOp2('')
    setOperacion('')
    setResultdado('')
  }

  // Función que lee las operaciones presionadas.
  const results = () => {
    if (operacion === '+') { // Apartado de la suma.
      // Este manda a llamar a la suma desde el arhivo suma,
      // que se encuentra en la carpeta de operaciones.
      setResultdado(suma(Number(op1), Number(op2)))
      // Limpiando los operandos.
      setOp1('')
      setOp3('')

      // Haciendo las operaciones nuevamente,
      // en caso de que se haya presionado otra vez una tecla de suma, resta o multiplicación.
      if (newOperacion === '+') {
        setResultdado(suma(Number(resultado), Number(op3)))
        // setOperacion('')
        setOp1(resultado)
        console.log('El anterior resultado es: ', resultado)
        console.log('Nuevo operador 1', resultado)
        console.log('Nuevo operador 2', op3)
        setOp1('')
        setOp3('')
        setNewOperacion('')
      } else if (newOperacion === '*') {
        setResultdado(multiplicacion(Number(resultado), Number(op3)))
        // setOperacion('')
        setOp1(resultado)
        console.log('El nuevo resultado es: ', resultado)
        console.log('Nuevo operador 1', op1)
        console.log('Nuevo operador 2', op3)
        setOp1('')
        setOp3('')
        setNewOperacion('')
      } else if (newOperacion === '-') {
        setResultdado(resta(Number(resultado), Number(op3)))
        // setOperacion('')
        setOp1(resultado)
        console.log('El nuevo resultado es: ', resultado)
        console.log('Nuevo operador 1', op1)
        console.log('Nuevo operador 2', op3)
        setOp1('')
        setOp3('')
        setNewOperacion('')
      }
    } else if (operacion === '-') { // Apartado de la resta.
      // Este manda a llamar a la operación resta, que se encuentra en la carpeta de operaciones.
      setResultdado(resta(Number(op1), Number(op2)))
      // Se limpian los dos números metidos originalmente.
      setOp1('')
      setOp3('')
      // Haciendo las operaciones nuevamente,
      // en caso de que se haya presionado otra vez una tecla de suma, resta o multiplicación.

      if (newOperacion === '+') {
        setOperacion('')
        setOp1(resultado)
        console.log('Nuevo operador1', op1)
        console.log('Op3', op3)
        setResultdado(suma(Number(resultado), Number(op3)))
        console.log(resultado)
        setOp1('')
        setOp3('')
        //setNewOperacion('')
      } else if (newOperacion === '*') {
        setOperacion('')
        setOp1(resultado)
        console.log('Nuevo operador 1', op1)
        console.log('Nuevo operador 2', op3)
        setResultdado(multiplicacion(Number(resultado), Number(op3)))
        console.log(resultado)
        setOp1('')
        setOp3('')
        //setNewOperacion('')
      }else if (newOperacion === '-') {
        setOperacion('')
        setOp1(resultado)
        console.log('Nuevo operador 1', op1)
        console.log('Nuevo operador 2', op3)
        setResultdado(resta(Number(resultado), Number(op3)))
        console.log(resultado)
        setOp1('')
        setOp3('')
        //setNewOperacion('')
      }
    } else if (operacion === '*') {// Apartado de la multiplicación.
      // Este manda a llamar a la operación multiplicación,
      // que se encuentra en la carpeta de operaciones.
      setResultdado(multiplicacion(Number(op1), Number(op2)))
      setOp1('')
      setOp3('')
      // Haciendo las operaciones nuevamente,
      // en caso de que se haya presionado otra vez una tecla de suma, resta o multiplicación.

      if (newOperacion === '+') {
        setOperacion('')
        setOp1(resultado)
        console.log('Nuevo operador1', op1)
        console.log('Op3', op3)
        setResultdado(suma(Number(resultado), Number(op3)))
        setOp1('')
        setOp3('')
        //setNewOperacion('')
      } else if (newOperacion === '*') {
        setOperacion('')
        setOp1(resultado)
        console.log('Nuevo operador1', op1)
        console.log('Op3', op3)
        setResultdado(multiplicacion(Number(resultado), Number(op3)))
        setOp1('')
        setOp3('')
      } else if (newOperacion === '-') {
        setOperacion('')
        setOp1(resultado)
        console.log('Nuevo operador1', op1)
        console.log('Op3', op3)
        setResultdado(resta(Number(resultado), Number(op3)))
        setOp1('')
        setOp3('')
       // setNewOperacion('')
      }
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
        <div className='current'>{resultado ? resultado : (!operacion ? op1 : op2)}</div>
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
