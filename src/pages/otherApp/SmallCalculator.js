import React, { useState } from 'react';

const SmallCalculator = () => {
  const [fnumber, setFnumber] = useState('');
  const [lnumber, setLnumber] = useState('');
  const [result, setResult] = useState('');

  const plusClick = () => {
    const resultValue = parseInt(fnumber) + parseInt(lnumber);
    // console.log('result-->', resultValue);
    setResult(resultValue);
    setTimeout(() => {
      setResult('');
      setFnumber('');
      setLnumber('');
    }, 3000);
  };
  const minusClick = () => {
    const resultValue = parseInt(fnumber) - parseInt(lnumber);
    console.log('result-->', resultValue);
    setResult(resultValue);
    setTimeout(() => {
      setResult('');
      setFnumber('');
      setLnumber('');
    }, 3000);
  };
  const multiplyClick = () => {
    const resultValue = parseInt(fnumber) * parseInt(lnumber);
    console.log('result-->', resultValue);
    setResult(resultValue);
    setTimeout(() => {
      setResult('');
      setFnumber('');
      setLnumber('');
    }, 3000);
  };
  const divideClick = () => {
    const resultValue = parseInt(fnumber) / parseInt(lnumber);
    console.log('result-->', resultValue);
    setResult(resultValue);
    setTimeout(() => {
      setResult('');
      setFnumber('');
      setLnumber('');
    }, 3000);
  };

  const resetClick = () => {
    setFnumber('');
    setLnumber('');
    setResult('');
  };

  console.log('fnumber  & lnumber==>', fnumber, lnumber, result);
  return (
    <>
      <div className="container">
        <h2>Small Calculator</h2>
        <div style={{ marginBottom: 30 }}>
          <input
            type="text"
            name="fnumber"
            id="fnumber"
            value={fnumber}
            style={{ fontSize: 20 }}
            onChange={(e) => setFnumber(e.target.value)}
          />{' '}
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="lnumber"
            id="lnumber"
            style={{ fontSize: 20 }}
            value={lnumber}
            onChange={(e) => setLnumber(e.target.value)}
          />{' '}
          &nbsp;&nbsp;&nbsp;
          <span style={{ fontSize: 35, marginBottom: 30 }}>=</span>{' '}
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="result"
            id="result"
            disabled
            value={result}
            style={{ fontSize: 20, width: 'auto' }}
          />{' '}
          &nbsp;&nbsp;&nbsp;
        </div>
        <div
          className="mainbuttons"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <button
            style={{
              backgroundColor: 'green',
              color: 'white',
              fontSize: 40,
              width: 50,
            }}
            type="button"
            onClick={() => plusClick()}
          >
            +
          </button>{' '}
          &nbsp;&nbsp;&nbsp;
          <button
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontSize: 40,
              width: 50,
            }}
            type="button"
            onClick={() => minusClick()}
          >
            -
          </button>{' '}
          &nbsp;&nbsp;&nbsp;
          <button
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              fontSize: 40,
              width: 50,
            }}
            type="button"
            onClick={() => multiplyClick()}
          >
            ×
          </button>{' '}
          &nbsp;&nbsp;&nbsp;
          <button
            style={{
              backgroundColor: 'orange',
              color: 'black',
              fontSize: 40,
              width: 50,
            }}
            type="button"
            onClick={() => divideClick()}
          >
            ÷
          </button>{' '}
          &nbsp;&nbsp;&nbsp;
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              fontSize: 30,
              width: 100,
              height: 50,
            }}
            type="button"
            onClick={() => resetClick()}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default SmallCalculator;
