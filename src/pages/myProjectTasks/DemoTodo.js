import React, { useState } from 'react'
import { Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { v4 as uuidv4 } from "uuid";


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
    <div className='container'>
    <h2><Badge bg="secondary">ToDo Items</Badge></h2>
    <div className='container my-4' style={{margin:'0 auto 0',width:'60%'}}>
        <Form onSubmit={TextSubmit}>
            <InputGroup className="mb-3">
          <InputGroup.Text>Enter todo Item here :</InputGroup.Text>
            <Form.Control aria-label="Todo Item" value={textTodo} onChange={OnInput} />
            <Button type='submit' variant="outline-info">
          Add to List
          </Button>
          </InputGroup>
    </Form>{' '}
    <div><h4 style={{color: 'red'}}>{error}</h4></div>{' '}
    {vData === '' ? (<></>) : 
    (
      <div className="card mb-3" style={{width:'40%',margin:'0 auto 0'}}>
        <h4 style={{color:'yellowgreen'}}>Todo Item Details</h4>
        <h5>{vData}</h5>
      </div>
    )}
    
    {todoMainData.length === 0 ? (<span style={{color:'red'}}>No Todo Data</span>) 
    :(
      <div className="card">
        <div className="card-body">
      <table className="table table-columns" style={{margin : '0 auto'}}>
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
                <div class="input-group input-group-sm">
                <input value={textEdit} type='text' className='form-control' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
                onChange={(ev) => setTextEdit(ev.target.value)} style={{marginRight:'10px'}}/>
                </div>
               </td>) 
              : (<td>{tdData.todoText}</td>)
             }
             
             <td>
              {
                editId===tdData.tId? (<><button className='btn btn-danger btn-sm'
                onClick={() => editCancel()}>
                  Cancel
                </button>&nbsp;&nbsp;</>) : (<><button className='btn btn-primary btn-sm'
                onClick={()=>vClick(tdData.todoText)}
                >View</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className='btn btn-danger btn-sm'
                onClick={() => delClick(tdData.tId)}
                >
                  Delete
                </button>&nbsp;&nbsp;&nbsp;&nbsp;</>)
              }
              
              {
                editId===tdData.tId? ( <button className={!textEdit ?'btn btn-secondary btn-sm' : 'btn btn-success btn-sm'}
                disabled = {!textEdit}
                onClick={() => editSubmitClick(tdData.tId)}>
                  Edit Submit 
                </button>) : 
                (<button className='btn btn-success btn-sm'
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
    </div>
    )}
    
    </div>
    </div>
  )
}

export default DemoTodo
