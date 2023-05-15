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
            style={{ fontSize: 30 }}
            value={fnumber}
            onChange={(e) => setFnumber(e.target.value)}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            name="lnumber"
            id="lnumber"
            style={{ fontSize: 30 }}
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
            style={{ fontSize: 30 }}
          />{' '}
        </div>
        <div>
          <button
            type="button"
            onClick={() => onPlus()}
            style={{ fontSize: 40, backgroundColor: 'orange', width: 50 }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default SmallCalculatorApp;
