import React from 'react'

const DisplayPeople = (props) => {


  return (
    <>
    <hr />
    <div>DisplayPeople</div>
    
        <table className="table">
            <thead>
                <th>Name</th>
                <th>Color</th>
            </thead>
            <tbody>
               {props.peopleList.map((person, index)=>{
                return (<tr>
                    <td style={{color:person.color}}>{person.username}</td>
                    <td>{person.color}</td>
                </tr>)
               })}
            </tbody>
        </table>
    </>
  )
}

export default DisplayPeople