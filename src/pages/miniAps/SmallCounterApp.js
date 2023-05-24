import React, { useState } from 'react';
import Menu from '../navigation/Menu';

const SmallCounterApp = () => {
  // Hook
  // const [value, callBack] = hook();
  const [number, setNumber] = useState(0);

  const onIncrement = () => {
    const newInValue = number + 1;
    setNumber(newInValue);
  };

  const onDecrement = () => {
    console.log('onDecrement');
    const newDeValue = number - 1;
    setNumber(newDeValue);
    if (number === 0) {
      setNumber(0);
    }
  };

  console.log('number--->', number);
  const resultData = number;
  // "Key", "Value"

  const localData = localStorage.setItem(
    'countResult',
    JSON.stringify(resultData)
  );
  console.log('localData=>', JSON.parse(localStorage.getItem('countResult')));
  // localStorage.removeItem('countResult');

  return (
    <div>
      <Menu />
      <h3>Small Counter App</h3>
      <h4 style={{ fontSize: 100 }}>
        <span>{number}</span>
      </h4>
      <button
        type="button"
        style={{ fontSize: 20 }}
        onClick={() => onIncrement()}
      >
        Increment
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button
        type="button"
        style={{ fontSize: 20 }}
        onClick={() => onDecrement()}
      >
        Decrement
      </button>
    </div>
  );
};

export default SmallCounterApp;
