import React, { useState } from 'react';

const MainTodo = () => {
  const [todoName, setTodoName] = useState('');
  const [todoData, setTodoData] = useState([]);
  const [errorMessage, SetErrorMessage] = useState('');

  const onChangeInput = (e) => {
    setTodoName(e.target.value);
  };
  const addTodo = () => {
    if (!todoName || todoName === '') {
      SetErrorMessage('Please add todo');
      setTimeout(() => {
        SetErrorMessage('');
      }, 2000);
    }
    setTodoData([...todoData, todoName]);
    setTodoName('');
  };

  // console.log('todoName-->', todoName, todoData.length);
  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <input
          type="text"
          name="todoName"
          id="todoName"
          value={todoName}
          onChange={onChangeInput}
          style={{ fontSize: 30 }}
        />
        &nbsp;&nbsp;&nbsp;
        <button
          type="button"
          style={{
            fontSize: 30,
            width: 'auto',
            backgroundColor: 'green',
            color: '#fff',
          }}
          onClick={() => addTodo()}
        >
          Add
        </button>
      </div>
      <div>
        <h4 style={{ color: 'red' }}>{errorMessage}</h4>
      </div>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      {todoData.length === 0 ? (
        <h3 style={{ color: '#000' }}>No todo available!</h3>
      ) : (
        <div>
          <table
            style={{
              margin: 'auto',
            }}
          >
            <thead>
              <tr>
                <th style={{ textDecoration: 'underline' }}>Sl.No</th>
                <th style={{ textDecoration: 'underline' }}>Todo Name</th>
              </tr>
            </thead>
            &nbsp;&nbsp;&nbsp;
            {todoData &&
              todoData.reverse().map((tData, indx) => (
                <tbody>
                  <tr>
                    <td>{indx + 1}</td>
                    <td>{tData}</td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default MainTodo;
