import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Other from './components/Other';
import Error from './components/Error';
import Hero from './components/Hero';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>React Routing</h1>
      {/* <a href="/">Home</a> */}
      <br />
      <Link to={"/"}>React Home</Link> |
      <Link to={"/other"}> Other </Link> |
      <Link to={"/form"}> Search </Link> |

      {/* THEATER STAGE - ROUTES */}
      <Routes>
        {/* ACT I */}
        <Route path="/" element={<Home />} />
        {/* ACT II */}
        <Route path="/other" element={<Other />} />

        {/* Route to the form */}
        <Route path="/form" element={<Form />} />
        {/* Route to the hero component */}
        <Route path="/hero/:heroId" element={<Hero />} />

        {/* <Route path="/hero/:heroId/:color" element={<Hero />} /> */}

        <Route path="error" element={<Error />} />

        {/* no match */}
        <Route path="*" element={<main>
          <p>There's nothing here ❌</p>
          <Error />
        </main>}
        />
      </Routes>




    </div>




  );
}

export default App;
