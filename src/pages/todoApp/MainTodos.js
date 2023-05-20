import React, { useState } from 'react';
import Menu from '../navigation/Menu';

const MainTodos = () => {
  const [todoDatas, setTodoDatas] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [viewData, setViewData] = useState('');

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
      setTodoDatas([...todoDatas, todoText]);
      setTodoText('');
    }
  };

  console.log('todoText->', todoText);
  console.log('todoDatas->', todoDatas.length);

  const viewClick = (vData) => {
    console.log('vData-->', vData);
    setViewData(vData);
    setTimeout(() => {
      setViewData('');
    }, 3000);
  };

  console.log('viewData-->', viewData);

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
            disabled={!todoText}
            style={{
              fontSize: 20,
              // Style binding
              backgroundColor: !todoText ? 'grey' : 'green',
              color: '#fff',
            }}
          >
            Add
          </button>
        </form>{' '}
        <h4 style={{ color: 'red' }}>{errorMessage}</h4>
      </div>{' '}
      &nbsp;&nbsp;&nbsp;
      {/* View Todo Show */}
      {viewData === '' ? (
        <></>
      ) : (
        <div
          style={{
            border: '1px solid rgb(0, 0, 0)',
            margin: '0 auto 0',
            width: '30%',
          }}
        >
          <h2>View Specific Todo</h2>
          <h3>{viewData}</h3>
        </div>
      )}{' '}
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      {/* Table */}
      {todoDatas.length === 0 ? (
        <h3>No Todos available!!</h3>
      ) : (
        <div>
          <table style={{ margin: '0 auto' }}>
            <thead>
              <tr>
                <th>Sl.No</th>&nbsp;&nbsp;&nbsp;
                <th>Todo Name</th>
                <th>Action</th>
              </tr>
            </thead>
            {todoDatas &&
              todoDatas.map((tData, index) => (
                <tbody>
                  <tr>
                    <td>{index + 1}</td>&nbsp;&nbsp;&nbsp;
                    <td>{tData}</td>
                    <td>
                      <button
                        style={{
                          backgroundColor: 'rgb(92 121 13)',
                          color: '#fff',
                          fontSize: 18,
                        }}
                        onClick={() => viewClick(tData)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default MainTodos;
