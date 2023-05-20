import React, { useState } from 'react'
import Menu from '../navigation/Menu'

const DemoTodo = () => {
  const [todoMainData, setTodoMainData]= useState([]);
  const [textTodo, setTextTodo] = useState('');
  const [error, setError] = useState('');
  

  const OnInput = (e) => {
    setTextTodo (e.target.value);
  };

  const TextSubmit = (e) => {
    e.preventDefault();
    if(!textTodo || textTodo===''){
      setError('Input field is empty !');
      setTimeout(() =>{
        setError('');

      },3000);
    }else{
      
      setTodoMainData([...todoMainData, textTodo]);
      setTextTodo('');
    }
  };
  console.log("todoMainData-->",todoMainData.length);


  return (
    <div><Menu/>
    <h1 style={{backgroundColor:'blue', color:'white'}}>Todo App Project</h1>
    <div style={{backgroundColor:'yellow'}}>
        <form onSubmit={TextSubmit}>
        {' '}
        <input 
        type="text"
        placeholder='Enter text'
        style={{fontSize:15, borderRadius:10, marginTop:10}}
        value={textTodo}
        onChange={OnInput}
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <button type='submit' 
        style={{fontSize:30, borderRadius:10,color:'white' ,backgroundColor:'green',}}>
          +
          </button>
    </form>{' '}
    <div><h4 style={{color: 'red'}}>{error}</h4></div>{' '}

    <div>
      <table style={{margin : '0 auto'}}>
        <thead><tr><th>Sl.No</th>&nbsp;&nbsp;&nbsp;&nbsp;
         <th>Todo Items</th></tr></thead>
         
        {todoMainData && todoMainData.map((tdData, tdIndex) => (
        <tbody>
         <tr>
          <td>{tdIndex+1}
            </td>&nbsp;&nbsp;&nbsp;&nbsp;
             <td>{tdData}</td>
          </tr>
           </tbody>
       ))}
       </table>

    </div>
    </div>
    </div>
  )
}

export default DemoTodo