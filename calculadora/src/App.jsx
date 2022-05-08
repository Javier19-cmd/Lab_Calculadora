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

import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [resultado, setResultado] = useState("") // Estado de los botones de la calculadora.

  // Eventlistener de los botones.
  const handleClick = (e) => {
    setResultado(resultado.concat(e.target.name)) 
  }

  // Método para borrar la pantalla.
  const clear = () => {
    setResultado("")
  }

  return (
    <div className="App">
    
      <div className="container">
        {/*Div para el display de la calculadora*/}
        <form>
          <input type="text" value={resultado} />
        </form>

      </div>
      {/*Div para la calculadora*/}
      <div className="Calculadora">
        {/*Botón para el cero*/}
        <button name="0" className="Cero" onClick={handleClick}>0</button>
        {/*Botón para el uno*/}
        <button name="1" className="Uno" onClick={handleClick}>1</button>
        {/*Botón para el dos*/}
        <button name="2" className="Dos" onClick={handleClick}>2</button>
        {/*Botón para el tres*/}
        <button name="3" className="Tres" onClick={handleClick}>3</button>
        {/*Botón para el cuatro*/}
        <button name="4" className="Cuatro" onClick={handleClick}>4</button>
        {/*Botón para el seis*/}
        <button name="5" className="Cinco" onClick={handleClick}>5</button>
        {/*Botón para el siete*/}
        <button name="6" className="Seis" onClick={handleClick}>6</button>
        {/*Botón para el siete*/}
        <button name="7" className="Siete" onClick={handleClick}>7</button>
        {/*Botón para el ocho*/}
        <button name="8" className="Ocho" onClick={handleClick}>8</button>
        {/*Botón para el nueve*/}
        <button name="9" className="Nueve" onClick={handleClick}>9</button>
        {/*Botón para el más*/}
        <button name="+" className="Mas" onClick={handleClick}>+</button>
        {/*Botón para el menos*/}
        <button name="-" className="Menos" onClick={handleClick}>-</button>
        {/*Botón para la multiplicación*/}
        <button name="x" className="Multiplicacion" onClick={handleClick}>x</button>
        {/*Botón para la igualdad*/}
        <button className="Igual" onClick={handleClick}>=</button>
        {/*Botón para borrar*/}
        <button className="Borrar" onClick={clear} id="borrar" >C</button>
      </div>
    </div>
  )
}

export default App
