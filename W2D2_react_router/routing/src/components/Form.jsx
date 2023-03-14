import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom' 

const Form = (props) => {

    const [heroNumb, setHeroNumb] = useState(1)

    // in order to use the programmatic way
    // we need to invoke useNavigate
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log(heroNumb);
        navigate("/hero/" + heroNumb)

    }
    return (
        <div>
            <h1>Form</h1>
            <hr />
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <input type="number" min="1" onChange={(e) => {
                    setHeroNumb(e.target.value)
                }} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form