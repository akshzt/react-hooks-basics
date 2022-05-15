import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementBy5 = () => {
        // doesn't work
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        //correct way
        setCount(prevValue => prevValue + 5);
    }

  return (
    <div>
        <h3>HookCounterTwo</h3>
        <p>When updating state based on previous value: {`setCount(prevValue => prevValue + 1)`} </p>
        
        <p>Count: {count}</p>
        
        <button onClick={()=>setCount(initialCount)}>Reset</button>
        <button onClick={()=>setCount(prevValue => prevValue+1)}>Increment</button>
        <button onClick={()=>setCount(count => count-1)}>Decrement</button>
        <button onClick={incrementBy5}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo