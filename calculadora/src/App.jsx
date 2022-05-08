// Se instaló Babel: npm install @babel/preset-env
// Se instaló React: npm install @babel/preset-react
// Se instaló testing-library: npm install --save-dev @testing-library/react
// Se instaló el ambiente de jest: npm install --dev jest-environment-jsdom
// Se instaló el dom: npm install --save-dev @testing-library/jest-dom
// Se instaló el user event: npm install --save-dev @testing-library/user-event @testing-library/dom
// Se instaló el transform runtime: npm install @babel/plugin-transform-runtime
// Se instaló jest: npm install -g jest
// Para correr el ambiente, se escribe: npm run dev
// Para que las instancias funcionen, se tienen que hacer acá.

// Referencias: 
// 1. https://www.youtube.com/watch?v=hpfDRnijdPE&ab_channel=DigitalSolutionsMaster
// 2. https://www.youtube.com/watch?v=CMwt6Nwjf9g&ab_channel=BetoMoedano
// 3. https://www.youtube.com/watch?v=56fX1h_b1H0&ab_channel=BetoMoedano

import React from 'react'
import { useState } from 'react'
import './App.css'
import suma from './operaciones/suma'
import resta from './operaciones/resta'
import multiplicacion from './operaciones/multiplicacion'

function App() {

  const [op1, setOp1] = useState("") // Estado de los botones de la calculadora. Guarda el primer valor.
  const [op2, setOp2] = useState("") // Estado de los botones de la calculadora. Guarda el segundo valor.
  const [operacion, setOperacion] = useState("") // Estado que guarda las operaciones. 
  const [resultado, setResultdado] = useState(0) // Estado que guarda los resultados.

  // Eventlistener de los botones. Este escucha nada más a los botones de los números.
  const handleClick = (e) => {

    // Si la operación está vacía, entonces se asigna el primer número al primer estado.
    if(operacion === ""){
      setOp1(op1 + e) // Settea el primer número de la calculadora.
    }else{
      // Si ya se seleccionó la operación, entonces se asigna el valor del segundo número al segundo estado.
      setOp2(op2 + e) // Settea el segundo número de la calculadora.
    }
  }

  // Eventlistener de los botones. Este escucha a los botones de las operaciones.
  const opera = (e) => {
    setOperacion(e)
  }

  // Método para borrar la pantalla.
  const clear = () => {
    setOp1("")
    setOp2("")
    setOperacion("")
    setResultdado("")
  }

  // Eventlistener de los resultados. Este escucha al igual de la calculadora.
  const resultads = () => {
    switch (operacion){
      case "+":
        setResultdado(suma(Number(op1), Number(op2)))
        break;
      case "-":
        const b = resta(Number(op1), Number(op2))
        setResultdado(b)
        break;
      case "-":
        const c = multiplicacion(Number(op1), Number(op2))
        setResultdado(c)
        break;
    }
  }

  return (
    <div className="App">

      {/*Div para el display de la calculadora*/}
      {/* */}
      <div className="container">
        {/*Imprime el primer número con el operando*/}
        <div className="prev">{operacion ? op1 : ""}</div>
        {/*Imprime el resultado o la operación*/}
        <div className="current">{resultado ? (!operacion ? op1 : op2) : resultado}</div>
      </div>
      {/*Div para la calculadora*/}
      <div className="Calculadora">
        {/*Botón para el cero*/}
        <button className="Cero" onClick={() => {handleClick(0)}}>0</button>
        {/*Botón para el uno*/}
        <button className="Uno" onClick={() => {handleClick(1)}}>1</button>
        {/*Botón para el dos*/}
        <button className="Dos" onClick={() => {handleClick(2)}}>2</button>
        {/*Botón para el tres*/}
        <button className="Tres" onClick={() => {handleClick(3)}}>3</button>
        {/*Botón para el cuatro*/}
        <button className="Cuatro" onClick={() => {handleClick(4)}}>4</button>
        {/*Botón para el seis*/}
        <button className="Cinco" onClick={() => {handleClick(5)}}>5</button>
        {/*Botón para el siete*/}
        <button className="Seis" onClick={() => {handleClick(6)}}>6</button>
        {/*Botón para el siete*/}
        <button className="Siete" onClick={() => {handleClick(7)}}>7</button>
        {/*Botón para el ocho*/}
        <button className="Ocho" onClick={() => {handleClick(8)}}>8</button>
        {/*Botón para el nueve*/}
        <button className="Nueve" onClick={() => {handleClick(9)}}>9</button>
        {/*Botón para el más*/}
        <button className="Mas" onClick={() => {opera("+")}}>+</button>
        {/*Botón para el menos*/}
        <button className="Menos" onClick={() => {opera("-")}}>-</button>
        {/*Botón para la multiplicación*/}
        <button className="Multiplicacion" onClick={() => {opera("*")}}>x</button>
        {/*Botón para la igualdad*/}
        <button className="Igual" onClick={resultads}>=</button>
        {/*Botón para borrar*/}
        <button className="Borrar" onClick={clear} id="borrar" >C</button>
      </div>
    </div>
  )
}

export default App
