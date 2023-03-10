import React, {useState} from 'react'

const SportForm = (props) => {

    const [input, setInput] = useState("")

    const submitInput = (d) => {
        d.preventDefault()
        props.setStateFunction([...props.SportState, input])
        d.target.reset()
    }
   
  return (
    <fieldset>
        <legend>SportForm.jsx</legend>
        current input: {input}
        <hr />
        <h1>Create a new sport</h1>

        <form onSubmit={(d)=>{submitInput(d)}}>
            <label htmlFor="">Sport</label>
            <input onChange={(e)=>{setInput(e.target.value)}} />
            <button>ADD +</button>
        </form>

    </fieldset>
  )
}

export default SportForm