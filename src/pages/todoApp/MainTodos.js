import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Menu from '../navigation/Menu';

const MainTodos = () => {
  const [todoDatas, setTodoDatas] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [viewData, setViewData] = useState('');
  //edit
  const [editTodoText, setEditTodoText] = useState('');
  const [todoEditingData, setTodoEditingData] = useState(null);

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
      const newTodo = {
        todoId: uuidv4(),
        todoText: todoText,
        todoSuccess: 'Successful',
      };
      setTodoDatas([...todoDatas, newTodo]);
      setTodoText('');
    }
  };

  // console.log('todoText->', todoText);
  console.log('todoDatas->', todoDatas);

  const viewClick = (vData) => {
    console.log('vData-->', vData);
    setViewData(vData.todoText);
    setTimeout(() => {
      setViewData('');
    }, 3000);
  };

  const deleteClick = (dId) => {
    console.log('dId-->', dId);
    if (window.confirm('Do you want?')) {
      const removeTodo = [...todoDatas].filter((tData, indx) => {
        return tData.todoId !== dId;
      });

      console.log('removeTodo-->', removeTodo);
      setTodoDatas(removeTodo);
    }
  };

  const editCancel = (cId) => {
    setTodoEditingData(null);
    setEditTodoText('');
  };

  const editClick = (eId, todoGetData) => {
    if (window.confirm('Do you want to edit?')) {
      setTodoEditingData(eId);
      setEditTodoText(todoGetData);
    }
  };

  const editSubmit = (eId, todoGetData) => {
    console.log('editSubmit->', eId, todoGetData);
    if (window.confirm('Do you want to edit?')) {
      const updateTodo = [...todoDatas].map((eData) => {
        if (eData.todoId === eId) {
          eData.todoText = editTodoText;
        }
        return eData;
      });
      setTodoDatas(updateTodo);
      editCancel();
    }
  };

  console.log('todoEditingData-->', todoEditingData);

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
                    {todoEditingData === tData.todoId ? (
                      <td>
                        <input
                          type="text"
                          name="todoEditName"
                          id="todoEditName"
                          value={editTodoText}
                          onChange={(e) => setEditTodoText(e.target.value)}
                        />
                      </td>
                    ) : (
                      <td>{tData.todoText}</td>
                    )}
                    <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {todoEditingData === tData.todoId ? (
                        <button
                          style={{
                            backgroundColor: !editTodoText
                              ? 'grey'
                              : 'rgb(92 121 13)',
                            color: '#fff',
                            fontSize: 18,
                          }}
                          disabled={!editTodoText}
                          onClick={() =>
                            editSubmit(tData.todoId, tData.todoText)
                          }
                        >
                          Edit Submit
                        </button>
                      ) : (
                        <button
                          style={{
                            backgroundColor: 'rgb(92 121 13)',
                            color: '#fff',
                            fontSize: 18,
                          }}
                          onClick={() =>
                            editClick(tData.todoId, tData.todoText)
                          }
                        >
                          Edit
                        </button>
                      )}
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {todoEditingData === tData.todoId ? (
                        <>
                          <button
                            style={{
                              backgroundColor: 'blue',
                              color: '#fff',
                              fontSize: 18,
                            }}
                            onClick={() => editCancel(tData.todoId)}
                          >
                            Cancel
                          </button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                      ) : (
                        <>
                          {' '}
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
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <button
                            style={{
                              backgroundColor: 'red',
                              color: '#fff',
                              fontSize: 18,
                            }}
                            onClick={() => deleteClick(tData.todoId)}
                          >
                            Delete
                          </button>
                        </>
                      )}
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
