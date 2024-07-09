import React, { useContext } from 'react';
import B from './B';
import  CounterContext  from '../../contexts/CounterContext';

function A() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div>
      <h1>Component-A</h1>
      <p className='lead fs-1'>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Change counter</button>
      <B />
    </div>
  );
}

export default A;
