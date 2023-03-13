import './App.css';
import { useState, useEffect } from "react"
import axios from 'axios'

function App() {

  const [hero, setHero] = useState([])

  // ! useEffect triggers when the component has FINISHED rendering

  // useEffect(()=>{
  //   fetchSuperHeroes()
  // }, [])

  // const fetchSuperHeroes = () => {
  //   fetch("https://akabab.github.io/superhero-api/api/all.json")
  //   .then(response => {
  //     return response.json();
  // }).then(response => {
  //     console.log(response);
  //     setHero(response)
  // }).catch(err=>{
  //     console.log("⛔🚫",err);
  // });
  // }
  // fetchSuperHeroes()

  //* VANILLA JS fetch
  const fetchAxiosHeroes = () => {
    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        console.log(res.data);
        setHero(res.data)
      })
      .catch((err) => {
        console.log("❌❌", err);
      })
  }

  // ! useEffect triggers when the component has FINISHED rendering

  // AXIOS get
  useEffect(() => {
    fetchAxiosHeroes()
  }, [])

  //! Don't Do This
  // fetchAxiosHeroes()


  return (
    <div className="App">
      <h1>SuperHeroes API 🦸‍♀️🦸🦸‍♂️</h1>
      {/* <button onClick={()=>{fetchSuperHeroes()}}>Fetch Superheroes</button> */}
      {/* <button onClick={()=>{fetchAxiosHeroes()}}>Fetch Superheroes Axios</button> */}
      <div>
        {/* {JSON.stringify(hero)} */}
      </div>
      <table>
        <thead>
          <th>image</th>
          <th>Hero Name</th>
          <th>Full Name</th>
          <th>Publisher</th>
        </thead>
        <tbody>
          {hero.map((oneHero, idx) => {
            return (
              <tr key={idx}>
                <td> <img src={oneHero.images.md} alt={oneHero.name} width="80px" /> </td>
                <td>{oneHero.name}</td>
                <td>{oneHero.biography.fullName ? oneHero.biography.fullName : "N/A"}</td>
                <td>{oneHero.biography.publisher}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
