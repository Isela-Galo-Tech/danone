/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import './App.css';

function App() {
  const [calorias, setCalorias] = useState(0);
  const [inputCalorias, setInputCalorias] = useState('');

  const sumarCalorias = () => {
    if (inputCalorias !== '') {
      const nuevaCaloria = parseInt(inputCalorias);
      setCalorias(calorias + nuevaCaloria);
      setInputCalorias('');
    }
  };

  return (
    <div className="App">
      <h1>Contador de Calorías</h1>
      <input
        type="number"
        value={inputCalorias}
        onChange={(e) => setInputCalorias(e.target.value)}
      />
      <button onClick={sumarCalorias}>Agregar</button>
      <p>Total de calorías: {calorias}</p>
    </div>
  );
}

export default App;