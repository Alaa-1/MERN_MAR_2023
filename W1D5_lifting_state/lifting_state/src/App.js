import './App.css';
import { useState } from 'react'
import Display from './components/Display';
import SportForm from './components/SportForm';
import AddPerson from './components/AddPerson';
import DisplayPeople from './components/DisplayPeople';

function App() {

  const [sport, setSport] = useState(["🎾", "⚽", "🏉", "⚾"])

  const [people, setPeople] = useState([
    {username:"John", color: "purple"},
    {username:"Sarah", color: "pink"},
    {username:"Bob", color: "black"}
  ])

  const sayHi = (newSport) =>{
    console.log("Hi from App.js", newSport)
    // one method (long one)
    // const sportCopy = [...sport]
    // sportCopy.push(newSport)
    // setSport(sportCopy)

    // another method (short one)
    setSport([...sport, newSport])

  }


  return ( 
  <div className="App">
    <fieldset>
      <legend>App.jsx</legend>
        <h1>Lifting State 🏋️‍♀️</h1>
        {/* {JSON.stringify(sport)} */}
        {JSON.stringify(people)}
      <AddPerson people={people} setPeople= {setPeople}/>
      {/* <SportForm  SportState = {sport} setStateFunction ={setSport}/> */}
      {/* <Display listOfSport = {sport}/> */}
      <DisplayPeople peopleList= {people}/>
    </fieldset>
    </div>
  );
}

export default App;
