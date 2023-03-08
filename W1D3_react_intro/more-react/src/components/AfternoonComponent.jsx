import React, { Component } from 'react'

class AfternoonComponent extends Component {
    constructor(props) {
        super(props);
        // create state for this component
        this.state = {
            person: this.props.person
        }
    }
    increaseByOne() {
        //async function
        this.setState({
            person: {
                ...this.state.person,
                age: this.state.person.age + 1
            }
        }, () => { console.log(this.state.person.age) })

        // one state behind !!
        // console.log(this.state.person.age)
    }

    render() {

        return (
            <div>
                <div>AfternoonComponent</div>
                <h3>State:</h3>
                {JSON.stringify(this.state)}
                <br />
                <button onClick={() => { this.increaseByOne() }}>Click Me</button>
            </div>
        )
    }
}

export default AfternoonComponent;