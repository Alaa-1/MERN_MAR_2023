import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  const animals = ["🦁", "🐶", "🐘", "🐺"]

  const person = {
    name: "Joe",
    luckyNumber: 7,
    favFood : "🍝"
  }

  const luckyNumber = 9

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">

        <ClassComponent listOfAnimals={animals} />
        <FunctionalComponent randomPerson = {person} luckyNumber= {luckyNumber} animals={animals}/>

      </div>
    </fieldset>
  );
}

export default App;
