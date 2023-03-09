import React, { useState } from 'react';
import Display from './Display';

const Form = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [newUser, setNewUser] = useState({
        username, email, password
    })

    const [nameError, setNameError] = useState(false)


    const processForm = (e) => {
        e.preventDefault()
        const newUser = {
            username,
            email,
            password
        }
        console.log(newUser);
        setNewUser(newUser)

        e.target.reset()
    }

    const checkUsername = (e) =>{
        setUsername(e.target.value)
        if (e.target.value.length < 2){
            setNameError(true)
        }else{
            setNameError(false)
        }

    } 

    return (
        <div>
            <form onSubmit={(e) => { processForm(e) }}>
                <div>
                    <h1>Sign up</h1>
                    <p>username: {username}</p>
                    <p>email: {email}</p>
                    <p>password: {password}</p>

                </div>
                <hr />
                <div>
                    <label>Username: </label>
                    <input onChange={(e) => { checkUsername(e)} }   />
                    {nameError ? <p style={{color:"red"}}>must be more than 2</p> : <p></p> }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input onChange={(e) => { setPassword(e.target.value) }}  />
                </div>
                <button>Create User</button>
            </form>
            <hr />
            <Display newUser={newUser} />
        </div>
    );
};

export default Form;