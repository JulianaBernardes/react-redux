import React, { useState } from 'react'
import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Draw from './components/Draw'

function App() {

  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)

  return (
    <div className="App">
      <h1>React-Redux exercise (simple)</h1>
      <div className="line">
        <Interval min={min} max={max}
        onMinChanged={setMin} onMaxChanged={setMax}>
        </Interval>
      </div>
      <div className="line">
        <Average min={min} max={max}></Average>
        <Sum min={min} max={max}></Sum>
        <Draw min={min} max={max}></Draw>
      </div>
    </div>
  );
}

export default App;
