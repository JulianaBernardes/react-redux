import logo from './logo.svg';
import './App.css';

import Interval from './components/Interval'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>React-Redux exercise (simple)</h1>
      <div className="line">
        <Interval>x</Interval>
      </div>
      <div className="line">
        <Card title="Card 2" green>x</Card>
        <Card title="Card 3" blue>y</Card>
        <Card title="Card 4" purple>y</Card>
      </div>
    </div>
  );
}

export default App;
