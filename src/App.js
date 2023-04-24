import './App.css';
import InputComponent from './components/input';
import data from './demo.json';

function App() {
  const input = data.input;
  const preferredTech = data.select.preferredTech;

  return (
    <div className="App">
      <InputComponent ele="input" data={input} />
      <InputComponent ele="select" data={preferredTech} />
    </div>
  );
}

export default App;
