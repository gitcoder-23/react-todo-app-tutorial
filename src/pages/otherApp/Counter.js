import React, { useState } from 'react';
import Menu from '../navigation/Menu';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrement = () => {
    setNumber(number + 1);
  };

  const onDecrement = () => {
    setNumber(number - 1);
    if (number === 0) {
      setNumber(0);
    }
  };

  console.log('number-->', number);

  localStorage.setItem('countedNumber', JSON.stringify(number));

  const storeCountedNum = JSON.parse(localStorage.getItem('countedNumber'));
  console.log('storeCountedNum=>', storeCountedNum);

  return (
    <>
      <div className="container">
        <Menu />
        <h3>Counter App</h3>
        <h4 style={{ fontSize: 100 }}>
          <span>{number ?? storeCountedNum}</span>
        </h4>
        <button style={{ fontSize: 20 }} onClick={() => onIncrement()}>
          Increment
        </button>
        &nbsp;&nbsp;&nbsp;
        <button style={{ fontSize: 20 }} onClick={() => onDecrement()}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Counter;
