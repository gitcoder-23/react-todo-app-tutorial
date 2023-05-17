import React, { useState } from 'react';

const MainTodo = () => {
  const [todoName, setTodoName] = useState('');
  const [viewData, setViewData] = useState('');
  const [todoData, setTodoData] = useState([]);
  const [errorMessage, SetErrorMessage] = useState('');

  const onChangeInput = (e) => {
    setTodoName(e.target.value);
  };
  const todoHandleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    if (!todoName || todoName === '') {
      SetErrorMessage('Please add todo');
      setTimeout(() => {
        SetErrorMessage('');
      }, 2000);
    }
    const newTodo = {
      id: new Date().getTime(),
      todoTxt: todoName,
    };
    setTodoData([...todoData, newTodo]);
    setTodoName('');
    // setTodoData([...todoData].concat(newTodo));
    // setTodoData([...newTodo, todoName]);
  };

  const viewClick = (vData) => {
    setViewData(vData);

    setTimeout(() => {
      setViewData('');
    }, 3000);
  };

  const editClick = (eData) => {
    console.log('eData->', eData);
    setTodoName([...eData]);
  };

  const deleteClick = (dId) => {
    if (window.confirm('Do you want?')) {
      const removeItem = [...todoData].filter((todo) => {
        return todo.id !== dId;
      });
      setTodoData(removeItem);
    }
  };

  console.log('todoName-->', todoName, todoData, viewData, todoData.completed);
  return (
    <div>
      <h2>Todo App</h2>
      <div>
        <form onSubmit={todoHandleSubmit}>
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
            type="submit"
            disabled={!todoName}
            style={{
              fontSize: 30,
              width: 'auto',
              backgroundColor: !todoName ? 'grey' : 'green',
              color: '#fff',
            }}
          >
            Add
          </button>
        </form>
      </div>
      <div>
        <h4 style={{ color: 'red' }}>{errorMessage}</h4>
      </div>
      &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
      {viewData && (
        <>
          <div
            style={{
              border: '1px solid #000',
              width: '40%',
              margin: '0px auto',
            }}
          >
            <h3>View Todo</h3>
            <h4>{viewData.todoTxt}</h4>
          </div>
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        </>
      )}
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
                <th style={{ textDecoration: 'underline' }}>Sl.No</th>{' '}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <th style={{ textDecoration: 'underline' }}>Todo Name</th>{' '}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <th style={{ textDecoration: 'underline' }}>Action</th>{' '}
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              </tr>
            </thead>
            &nbsp;&nbsp;&nbsp;
            {todoData &&
              todoData.map((tData, indx) => (
                <tbody key={tData.id}>
                  <tr>
                    <td
                      style={{
                        fontSize: 18,
                      }}
                    >
                      {indx + 1}
                    </td>{' '}
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <td
                      style={{
                        fontSize: 18,
                      }}
                    >
                      {tData.todoTxt}
                    </td>{' '}
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <td>
                      <button
                        type="button"
                        style={{
                          backgroundColor: 'green',
                          color: '#fff',
                          fontSize: 18,
                        }}
                        onClick={() => viewClick(tData)}
                      >
                        View
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        style={{
                          backgroundColor: '#807800',
                          color: '#fff',
                          fontSize: 18,
                        }}
                        onClick={() => editClick(tData)}
                      >
                        Edit
                      </button>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        style={{
                          backgroundColor: '#807800',
                          color: '#fff',
                          fontSize: 18,
                        }}
                        onClick={() => deleteClick(tData.id)}
                      >
                        Delete
                      </button>
                    </td>{' '}
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
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
