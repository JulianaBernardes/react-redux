import logo from './logo.svg';
import './App.css';

import Interval from './components/Interval'
import Average from './components/Average'
import Sum from './components/Sum'
import Draw from './components/Draw'

function App() {
  return (
    <div className="App">
      <h1>React-Redux exercise (simple)</h1>
      <div className="line">
        <Interval>x</Interval>
      </div>
      <div className="line">
        <Average></Average>
        <Sum></Sum>
        <Draw></Draw>
      </div>
    </div>
  );
}

export default App;
