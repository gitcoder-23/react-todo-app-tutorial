import React, {useState} from 'react'

const SmallCounterByFourApp = () => {
    const [v, cb ] = useState(0);
    const onAdd = () => {
        let newVar = v + 4;
        cb(newVar);
    }
    const onMinus = () => {
        let newVar = v - 4;
        cb(newVar);
        if (v === 0){
            cb(0);
        }
    }
    console.log('v-->', v);
  return (
    <div style={{backgroundColor : 'cyan' }}>
      <h2>SmallCounterByFourApp</h2>
      <h4 style={{fontSize : 100 }}><span>{v}</span></h4>
      <button style={{fontSize : 30}} onClick={() => onAdd ()}>ADD</button> &nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{fontSize : 30}} onClick={() => onMinus ()}>MINUS</button>
    </div>
  )
}

export default SmallCounterByFourApp
