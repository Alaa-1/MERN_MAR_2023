import React, {useState} from 'react'

const AddPerson = (props) => {

    const [username, setUsername] = useState("")
    const [color, setColor] = useState("#ffffff")

    const submitInputs = (e) =>{
        e.preventDefault()
        const newUser = {
            username, 
            color
        }
        // props.setPeople([...props.people,newUser] )
        const copyPeople = [...props.people]
        // console.log(copyPeople)
        copyPeople.push(newUser)
        console.log(newUser);
        props.setPeople(copyPeople)
        // reset the inputs
        setUsername("")
        setColor("#ffffff")
    }

    return (<div>
        <hr />
        <fieldset>
            <h1>Create a person</h1>
            <p>Username: {username }</p>
            <p>Color: {color }</p>
            <legend>AddPerson.jsx</legend>

            <form onSubmit={(e)=>{submitInputs(e)}}>
                <label >Username: </label>
                <input onChange={(e) =>{setUsername(e.target.value)}} value={username}/>
                <br />
                <label>Color: </label>
                <input type="color" onChange={(e) =>{setColor(e.target.value)}} value={color}/>
                <br />
                <button>Add Person</button>
            </form>





        </fieldset>

    </div>
    )
}

export default AddPerson