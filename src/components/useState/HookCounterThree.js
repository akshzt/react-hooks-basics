import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName: '', lastName: ''});

  return (
    <div>
        <h3>HookCounterThree</h3>
        <p>Use Spread Operator ... with objects {`setName({
            ...name,
            firstName: e.target.value
            })`}</p>

        <form>
            <input type="text" value={name.firstName} 
            onChange= { (e) => {
                setName({...name, firstName: e.target.value})    
            }}/>
            <input type="text" value={name.lastName} 
            onChange={ (e) => {
                setName({...name, lastName: e.target.value})
            }}/>
            <p>Full Name: {name.firstName} {name.lastName}</p>
        </form>
    </div>
  )
}

export default HookCounterThree