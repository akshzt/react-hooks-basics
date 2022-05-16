import React, {useState, useEffect} from 'react'

const HookMouse = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('Component unmounting code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

  return (
    <div>
        <h3>HookMouse</h3>
        <p>Hooks X - {x} Y - {y}</p>
        <p>{`useEffect(()=>{})`} without dependency runs on every re-render/state change</p>
        <p>Use empty array to only call useEffect on initial render {`useEffect(()=>{}, [])`}</p>
        <p>Use dependency variable to trigger useEffect for state change of particular variable
            {`useEffect(()=> {}, [dependency1, dependency2])`}
        </p>
        <p>componentWillUnmount - useEffect returns a function <br/>
        {` 
            useEffect(() => {`}<br/>{`
        
                return () => {`}<br/><br/>{`
                    console.log('Component unmounting code');`}<br/>{`
                    window.removeEventListener('mousemove', logMousePosition);`}<br/>{`
                }`}<br/>{`
            }, []);
            }
        `}
        </p>
    </div>
  )
}

export default HookMouse