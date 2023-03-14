import React, {useEffect, useState} from 'react'
import axios from "axios"
import {useParams, useNavigate} from 'react-router-dom'

const Hero = (props) => {

const nav = useNavigate()
// Destructuring the key from the obj
const {heroId} = useParams();

console.log(useParams())
console.log(heroId)
const [hero, setHero] = useState(null)

// execute whn the component has finished loading
useEffect(()=>{
    axios.get(`https://akabab.github.io/superhero-api/api/id/${heroId}.json`)
    .then(res =>{
        console.log(res.data);
        setHero(res.data)
    })
    .catch(err =>{
        console.log("❌❌", err);
        nav("/error", {replace: true})
    })
}, [heroId])

const goBack = () =>{
    nav(-1)
}

  return (
    <div>
        <h1>SuperHero 🦸‍♀️🦸‍♀️</h1>
        {
            hero ? <>
            <h3>{hero.name}</h3>
            <img src={hero.images.sm} alt={hero.name} />
            </> : <>Loading ...</>
        }
        <br />
        <button onClick={()=>{goBack()}}>Back 👈</button>

    </div>
  )
}

export default Hero