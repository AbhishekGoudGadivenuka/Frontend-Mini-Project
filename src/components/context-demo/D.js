// D.js
import React, { useContext } from 'react';
import CounterContext from '../../contexts/CounterContext';  // Use default import

function D() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div>
      <h1>Component-D</h1>
      <p className='lead fs-1'>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Change counter</button>
    </div>
  );
}

export default D;
