import React, {useState} from 'react';
import SubClass from './SubClass';

const FunctionalComponent = (props) => {

   const [luckyNumber, setLuckyNumber ] = useState(props.luckyNumber)
      
    const increase = () =>{

        setLuckyNumber(luckyNumber.luckyNumber + 1)
    }
    return(
        <div>
            <h1>Hello from Functional Component</h1>
            <hr />
            Props from App.js:
            {props.animals.map((animal, index)=>{
                return <p key={index}>{animal}</p>
            })}
            <SubClass luckyNumber= {luckyNumber}/>
        </div>
    )
}

export default FunctionalComponent