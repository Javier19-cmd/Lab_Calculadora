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
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      {/*Div para la calculadora*/}
      <div className="Calculadora">
        {/*Div para el cero*/}
        <button className="Cero">0</button>
        {/*Div para el uno*/}
        <button className="Uno">1</button>
        {/*Div para el dos*/}
        <button className="Dos">2</button>
        {/*Div para el tres*/}
        <button className="Tres">3</button>
        {/*Div para el cuatro*/}
        <button className="Cuatro">4</button>
        {/*Div para el seis*/}
        <button className="Cinco">5</button>
        {/*Div para el siete*/}
        <button className="Seis">6</button>
        {/*Div para el siete*/}
        <button className="Siete">7</button>
        {/*Div para el ocho*/}
        <button className="Ocho">8</button>
        {/*Div para el nueve*/}
        <button className="Nueve">9</button>
      </div>
    </div>
  )
}

export default App
