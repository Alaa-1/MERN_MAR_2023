import React from 'react'

const Display = (props) => {
    return (
        <fieldset>

            <legend>Display.jsx</legend>
            <div>Display</div>
            {props.listOfSport.map((OneSport, i)=>{
                return <p key={i}>{OneSport}</p>
            })}
        </fieldset>
    )
}

export default Display