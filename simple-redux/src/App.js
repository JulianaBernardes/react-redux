import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <h1>React-Redux exercise (simple)</h1>
      <div className="line">
        <Card></Card>
      </div>
      <div className="line">
        <Card></Card>
      </div>
    </div>
  );
}

export default App;