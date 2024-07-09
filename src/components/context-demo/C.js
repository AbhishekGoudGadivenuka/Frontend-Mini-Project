import React, { useContext } from 'react';
import  CounterContext  from '../../contexts/CounterContext';

function C() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div>
      <h1>Component-C</h1>
      <p className='lead fs-1'>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Change counter</button>
    </div>
  );
}

export default C;
