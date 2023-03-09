import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = ({
            animals: this.props.listOfAnimals
        })
    }

    addAnimal(){
        const animalsCopy = [...this.state.animals]
        animalsCopy.push("🐸")
        this.setState({animals:animalsCopy})
        // console.log(this.state.animals);

    }


    render() {
        // console.log(this);
        return (
            <fieldset>
                <legend>ClassComponent.jsx</legend>
                <div>List of Animals</div>
                <div>
                    <h4>All the animals from props</h4>
                    {JSON.stringify(this.props.listOfAnimals)}
                </div>
                <div>
                    <h4>All the animals from State</h4>
                    {JSON.stringify(this.state.animals)}
                </div>
                <button onClick={()=>{this.addAnimal()}}>Add Animal</button>
            </fieldset>
        )
    }
}

export default ClassComponent