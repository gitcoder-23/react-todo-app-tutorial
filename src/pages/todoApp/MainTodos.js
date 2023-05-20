import React, { useState } from 'react';
import Menu from '../navigation/Menu';

const MainTodos = () => {
  const [todoDatas, setTodoDatas] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [SlNo, setSlNo] = useState('');
  const [TodoName, setTodoName] = useState('');

  const onInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todoText || todoText === '') {
      setErrorMessage('Please fill the field');
      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    } else {
      setSlNo('SlNo');
      setTodoName('TodoName');
      setTodoDatas([]);
      setTodoDatas([...todoDatas, todoText]);
      setTodoText('');
    }
  };

  console.log('todoText->', todoText);
  console.log('todoDatas->', todoDatas);

  return (
    <div>
      <Menu />
      <h2>Todo App CRUD</h2>
      <div>
        <form onSubmit={handleSubmit}>
          {' '}
          <input
            type="text"
            style={{ fontSize: 20 }}
            value={todoText}
            onChange={onInputChange}
          />
          &nbsp;&nbsp;&nbsp;
          <button
            type="submit"
            style={{ fontSize: 20, backgroundColor: 'green', color: '#fff' }}
          >
            Add
          </button>
        </form>{' '}
        <h4 style={{ color: 'red' }}>{errorMessage}</h4>
      </div>{' '}
      &nbsp;&nbsp;&nbsp;
      {/* Table */}
      <div>
        <table style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>{SlNo}</th>&nbsp;&nbsp;&nbsp;
              <th>{TodoName}</th>
            </tr>
          </thead>
          {todoDatas.map((tData, index) => (
            <tbody>
              <tr>
                <td>{index + 1}</td>&nbsp;&nbsp;&nbsp;
                <td>{tData}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MainTodos;
