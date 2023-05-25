import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";

import Menu from '../navigation/Menu'

const DemoTodo = () => {
  const [todoMainData, setTodoMainData]= useState([]);
  const [textTodo, setTextTodo] = useState('');
  const [error, setError] = useState('');
  const [vData, setVdata] = useState('');
  //edit///
  const [textEdit, setTextEdit] = useState('');
  const [editId, setEditId] = useState('');
  

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
      const ntodoData = {
        tId : uuidv4(),
        todoText : textTodo,
        tsuccess : 'success',
      };
      
      setTodoMainData([...todoMainData, ntodoData]);
      setTextTodo('');
    }
  };
  console.log("todoMainData-->",todoMainData.length);

  const vClick = (view) =>{
    console.log('view-->',view);
    setVdata(view);
    setTimeout(() =>{
      setVdata('');
    }, 3000)
  }
  const delClick = (evD) => {
    console.log("evD-->",evD);
    if (window.confirm('Do you want to delete?')){
    const deleteData =  [...todoMainData].filter((delData,delIndex) => {
      console.log('delData-->',delData);
      return delData.tId !== evD;
    });
    setTodoMainData(deleteData);
  }}
  const editClick = (evData, evId) => {
    if (window.confirm('Do you want to edit?')){ 
    console.log('evData-->',evData, 'evId-->',evId);
    setTextEdit(evData);
    setEditId(evId);}
  }
  const editSubmitClick = (teId) => {
    const updateData =  [...todoMainData].map((eData) => {
      console.log('eData-->',eData);
      if (eData.tId === teId) {
        eData.todoText = textEdit;
      } 
      return eData;

    });
    setTodoMainData(updateData);
    editCancel();
  };
  const editCancel = () => {
    setTextEdit('');
    setEditId('');
  }

//local storage
localStorage.setItem('InputData', JSON.stringify(textTodo));
const lStorage = JSON.parse(localStorage.getItem('InputData'));
console.log('lStorage-->',lStorage);

localStorage.setItem('InnerData', JSON.stringify(todoMainData));
const lStorage1 = JSON.parse(localStorage.getItem('InnerData'));
console.log('lStorage1-->',lStorage1);

localStorage.setItem('editedData', JSON.stringify(textEdit));
const lStorage2 = JSON.parse(localStorage.getItem('editedData'));
console.log('lStorage2-->',lStorage2);

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
        style={{fontSize:30, borderRadius:10,color:'white' ,backgroundColor:'green',marginTop:10}}>
          +
          </button>
    </form>{' '}
    <div><h4 style={{color: 'red'}}>{error}</h4></div>{' '}
    {vData === '' ? (<></>) : 
    (
      <div style={{
        border: '1px solid rgb(0, 0, 0)',
        margin: '0 auto 0',
        width: '30%',
      }}>
        <h2>Todo Item Details</h2>
        <h3>{vData}</h3>
      </div>
    )}
    
    {todoMainData.length === 0 ? (<h2>No Todo Data</h2>) 
    :(
      <div>
      <table style={{margin : '0 auto'}}>
        <thead><tr><th>Sl.No</th>&nbsp;&nbsp;&nbsp;&nbsp;
         <th>Todo Items</th>
         <th>Actions</th>
         </tr>
         </thead>
         
        {todoMainData && todoMainData.map((tdData, tdIndex) => {
          console.log('tdData-->',tdData);
          return (
        <tbody>
         <tr>
          <td>{tdIndex+1}</td>&nbsp;&nbsp;&nbsp;&nbsp;
             {
              editId===tdData.tId? 
              (<td>
                <input value={textEdit} style={{borderRadius:10}}
                onChange={(ev) => setTextEdit(ev.target.value)}/></td>) 
              : (<td>{tdData.todoText}</td>)
             }
             
             <td>
              {
                editId===tdData.tId? (<><button style={{backgroundColor: 'blue', borderRadius: 10}}
                onClick={() => editCancel()}>
                  Cancel
                </button>&nbsp;&nbsp;</>) : (<><button style={{backgroundColor: 'azure', borderRadius: 10}}
                onClick={()=>vClick(tdData.todoText)}
                >View</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={{backgroundColor: 'red', borderRadius: 10}}
                onClick={() => delClick(tdData.tId)}
                >
                  Delete
                </button>&nbsp;&nbsp;&nbsp;&nbsp;</>)
              }
              
              {
                editId===tdData.tId? ( <button style={{backgroundColor: !textEdit ? 'grey': 'blueviolet', borderRadius: 10}}
                disabled = {!textEdit}
                onClick={() => editSubmitClick(tdData.tId)}>
                  Edit Submit 
                </button>) : 
                (<button style={{backgroundColor: 'blue', borderRadius: 10}}
              onClick={() => editClick(tdData.todoText, tdData.tId)}>
                Edit
              </button>)
              }
            </td>
          </tr>
           </tbody>
       )
       })}
       </table>

    </div>
    )}
    
    </div>
    </div>
  )
}

export default DemoTodo
