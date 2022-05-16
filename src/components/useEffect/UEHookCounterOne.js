import React, { useState, useEffect } from 'react'

const UEHookCounterOne = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - Updating document title');
        document.title = `You clicked ${count} times`;
    }, [count]);

  return (
    <div>
        <h3>UEHookCounterOne</h3>
        <p>useEffect runs after every render, useEffect is place inside the component</p>
        <input type="text" value={name}
         onChange={e => {
             setName(e.target.value);
         }} />
        <button onClick={() => setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default UEHookCounterOne