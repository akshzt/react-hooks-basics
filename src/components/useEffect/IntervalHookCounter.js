import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0);

    const tick = () => {
        // setCount(count+1);
        // dependency not needed as it checks previous state value
        setCount(prevCount => prevCount+1)
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    });

  return (
    <div>
        <h3>IntervalHookCounter</h3>
        <p>{count}</p>
    </div>
  )
}

export default IntervalHookCounter