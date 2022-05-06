// Se instaló Babel: npm install @babel/preset-env
// Se instaló React: npm install @babel/preset-react
// Se instaló testing-library: npm install --save-dev @testing-library/react
// Se instaló el ambiente de jest: npm install --dev jest-environment-jsdom
// Se instaló el dom: npm install --save-dev @testing-library/jest-dom
// Se instaló el user event: npm install --save-dev @testing-library/user-event @testing-library/dom
// Se instaló el transform runtime: npm install @babel/plugin-transform-runtime
// Se instaló jest: npm install -g jest
// Para correr el ambiente, se escribe: npm run dev

import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
