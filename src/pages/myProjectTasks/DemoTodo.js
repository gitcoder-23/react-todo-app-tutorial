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
    {/* <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link-disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classNameName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </> */}
    <h2><Badge bg="secondary">ToDo Items</Badge></h2>
    <div className='container my-4'>
        <Form onSubmit={TextSubmit}>
          <div className='row'>
            <div className="col-8">
            <InputGroup className="mb-3">
          <InputGroup.Text>Enter todo Item here = </InputGroup.Text>
            <Form.Control aria-label="Todo Item" value={textTodo} onChange={OnInput} />
          </InputGroup>
            </div>
        <div className="col-4">
        <Button type='submit' variant="info">
          Add to List
          </Button>
        </div>
        
          </div>
    </Form>{' '}
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
