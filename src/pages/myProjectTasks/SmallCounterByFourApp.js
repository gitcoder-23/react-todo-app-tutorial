import React, { useState } from 'react';

const SmallCounterByFourApp = () => {
  const [newNumber, setNewNumber] = useState(0);

  const onMinus = () => {
    let newVar = newNumber - 4;
    setNewNumber(newVar);
    if (newNumber === 0) {
      setNewNumber(0);
    }
  };
  console.log('newNumber-->', newNumber);
  return (
    <div style={{ backgroundColor: 'cyan' }}>
      <h2>SmallCounterByFourApp</h2>
      <h4 style={{ fontSize: 100 }}>
        <span>{newNumber}</span>
      </h4>
      <button
        style={{ fontSize: 30 }}
        onClick={() => {
          let newVar = newNumber + 4;
          setNewNumber(newVar);
        }}
      >
        ADD
      </button>{' '}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{ fontSize: 30 }} onClick={() => onMinus()}>
        MINUS
      </button>
    </div>
  );
};

export default SmallCounterByFourApp;
