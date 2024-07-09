import React, { useContext } from 'react';
import  CounterContext  from '../../contexts/CounterContext';
import C from './C';

function B() {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div>
      <h1>Component-B</h1>
      <p className='lead fs-1'>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Change counter</button>
      <C />
    </div>
  );
}

export default B;
