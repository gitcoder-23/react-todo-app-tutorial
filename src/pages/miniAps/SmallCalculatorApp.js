import React, { useState } from 'react';

const SmallCalculatorApp = () => {
  const [fnumber, setFnumber] = useState('');
  const [lnumber, setLnumber] = useState('');
  const [result, setResult] = useState('');

  const onPlus = () => {
    let plusValue = parseInt(fnumber) + parseInt(lnumber);
    console.log('plusValue-->', plusValue);
    setResult(plusValue);
    // Blank after 3sec
    setTimeout(() => {
      setFnumber('');
      setLnumber('');
      setResult('');
    }, 3000);
  };
  const onMinus = () => {
    let plusValue1 = parseInt(fnumber) - parseInt(lnumber);
    console.log('plusValue-->', plusValue1);
    setResult(plusValue1);
    // Blank after 3sec
    setTimeout(() => {
      setFnumber('');
      setLnumber('');
      setResult('');
    }, 3000);
  };
  const onMultiply = () => {
    let plusValue2 = parseInt(fnumber) * parseInt(lnumber);
    console.log('plusValue-->', plusValue2);
    setResult(plusValue2);
    // Blank after 3sec
    setTimeout(() => {
      setFnumber('');
      setLnumber('');
      setResult('');
    }, 3000);
  };
  const onDivision = () => {
    let plusValue3 = parseInt(fnumber) / parseInt(lnumber);
    console.log('plusValue-->', plusValue3);
    setResult(plusValue3);
    // Blank after 3sec
    setTimeout(() => {
      setFnumber('');
      setLnumber('');
      setResult('');
    }, 3000);
  };
  const onModulus = () => {
    let plusValue4 = parseInt(fnumber) % parseInt(lnumber);
    console.log('plusValue-->', plusValue4);
    setResult(plusValue4);
    // Blank after 3sec
    setTimeout(() => {
      setFnumber('');
      setLnumber('');
      setResult('');
    }, 3000);
  };

  console.log('fnumber-lnumber-->', fnumber, lnumber);

  return (
    <>
      <div>
        <h2>Small Calculator App</h2>
        <div style={{ marginBottom: 20 }}>
          <input
            type="text"
            name="fnumber"
            id="fnumber"
            style={{ fontSize: 30 , borderRadius : 15 }}
            value={fnumber}
            onChange={(e) => setFnumber(e.target.value)}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="lnumber"
            id="lnumber"
            style={{ fontSize: 30 , borderRadius : 15 }}
            value={lnumber}
            onChange={(e) => setLnumber(e.target.value)}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{ fontSize: 50 }}>=</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="lnumber"
            id="lnumber"
            disabled
            value={result}
            style={{ fontSize: 30 , borderRadius : 15 }}
          />{' '}
        </div>
        <div>
          <button
            type="button"
            onClick={() => onPlus()}
            style={{ fontSize: 40, backgroundColor: 'orange', width: 50 , borderRadius : 15 }}
          >
            +
          </button>
          &nbsp;
          &nbsp;
          &nbsp;
          <button
            type="button"
            onClick={() => onMinus()}
            style={{ fontSize: 40, backgroundColor: 'green', width: 50 , borderRadius : 15 }}
          >
            -
          </button>&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            onClick={() => onMultiply()}
            style={{ fontSize: 40, backgroundColor: 'yellow', width: 50 , borderRadius : 15 }}
          >
            *
          </button>&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            onClick={() => onDivision()}
            style={{ fontSize: 40, backgroundColor: 'blue', width: 50 , borderRadius : 15 }}
          >
            /
          </button>&nbsp;&nbsp;&nbsp;
          <button
            type="button"
            onClick={() => onModulus()}
            style={{ fontSize: 40, backgroundColor: 'red', width: 50 , borderRadius : 15 }}
          >
            %
          </button>&nbsp;&nbsp;&nbsp;
          {/* <button
            type="button"
            onClick={() => onModulus()}
            style={{ fontSize: 40, backgroundColor: 'cyan', width: 50 , borderRadius : 15 }}
          >
            R
          </button> */}
        </div>
      </div>
    </>
  );
};

export default SmallCalculatorApp;
