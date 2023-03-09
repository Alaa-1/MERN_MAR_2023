import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend>Display.jsx</legend>
    <div>Display Form</div>
    {JSON.stringify(props.newUser)}
    </fieldset>
  )
}

export default Display