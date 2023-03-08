import './App.css';
import AfternoonComponent from './components/AfternoonComponent';

const person = {
  name: "Joe",
  favorFood: "🍕",
  age:33
}

function App() {
  return (
    <div className="App">
      <h1>More React</h1>
      < AfternoonComponent person = {person} />
    </div>
  );
}

export default App;
