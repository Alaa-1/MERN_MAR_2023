import './App.css';

import AnotherComponent from './components/AnotherComponent';
import Demo from './components/Demo';


const firstName = "Thomas"
const phoneNumber = 54878713
console.log(firstName);
function App() {
  return (
    <fieldset>
      <legend>App.js</legend>
    <div className="App">
      <AnotherComponent phone = {phoneNumber} />
      {/* {firstName} */}
      <Demo phone = {phoneNumber}/>
    </div>
    </fieldset>
  );
}

export default App;
