import React, { Component } from 'react'

class AnotherComponent extends Component {

    render() {
        const gameName = "League of Legends"

        const studentsGrades = [{
            "Joe": 10,
            "status": "Graduating"
        },
        {
            "Lucas": 7,
            "status": "Failed"
        },
        {
            "Adam": 20,
            "status": "🎉"
        }
        ]

        const animals = ["🐯", "🐘", "🐦", {"zoo": true}]

        const newNumber = this.props
        console.log("Hello from another componeent");
        console.log(this.props.phone)
        return (
            <>
            <fieldset>
                <legend>AnotherComponent.jsx</legend>
                <h1>Intro To REACT</h1>
                <p>{gameName}</p>
                <br />
                <ul>
                { studentsGrades.map((student, index)=>{
                    return <li key={index}>{student.status} </li>
                })}
                </ul>

                <div>{JSON.stringify(animals)}</div>

                <h6>Phone Number:</h6>
                <p>{JSON.stringify(this.props.phone)}</p>
                </fieldset>
            </>
        )
    }
}

export default AnotherComponent