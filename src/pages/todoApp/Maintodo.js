import React, { useState } from 'react';

const MainTodo = () => {
  const [todoName, setTodoName] = useState('');
  const [viewData, setViewData] = useState('');
  const [todoDatas, setTodoDatas] = useState([]);
  const [errorMessage, SetErrorMessage] = useState('');
  const [todoEditing, SetTodoEditing] = useState(null);
  const [editTodoName, SetEditTodoName] = useState('');

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
    setTodoDatas([...todoDatas, newTodo]);
    setTodoName('');
    // setTodoDatas([...todoDatas].concat(newTodo));
    // setTodoDatas([...newTodo, todoName]);
  };

  const viewClick = (vData) => {
    setViewData(vData);

    setTimeout(() => {
      setViewData('');
    }, 3000);
  };

  const editClick = (eId) => {
    console.log('eId->', eId);
    SetTodoEditing(eId);
  };

  const editSubmit = (esId) => {
    const updatedTodo = [...todoDatas].map((edTodo) => {
      if (edTodo.id === esId) {
        edTodo.todoTxt = editTodoName;
      }
      return edTodo;
    });
    setTodoDatas(updatedTodo);
    SetTodoEditing(null);
    SetEditTodoName('');
  };

  const cancelEdit = (cId) => {
    SetTodoEditing(null);
    SetEditTodoName('');
  };

  const deleteClick = (dId) => {
    if (window.confirm('Do you want?')) {
      const removeItem = [...todoDatas].filter((todo) => {
        return todo.id !== dId;
      });
      setTodoDatas(removeItem);
    }
  };

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
      {todoDatas.length === 0 ? (
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
            {todoDatas &&
              todoDatas.map((tData, indx) => (
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
                    {todoEditing === tData.id ? (
                      <td
                        style={{
                          fontSize: 18,
                        }}
                      >
                        <input
                          type="text"
                          value={editTodoName}
                          onChange={(e) => SetEditTodoName(e.target.value)}
                        />
                      </td>
                    ) : (
                      <td
                        style={{
                          fontSize: 18,
                        }}
                      >
                        {tData.todoTxt}
                      </td>
                    )}{' '}
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <td>
                      {todoEditing === tData.id ? (
                        <>
                          {' '}
                          <button
                            type="button"
                            style={{
                              backgroundColor: 'green',
                              color: '#fff',
                              fontSize: 18,
                            }}
                            onClick={() => editSubmit(tData.id)}
                          >
                            Submit
                          </button>
                          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                          <button
                            type="button"
                            style={{
                              backgroundColor: 'green',
                              color: '#fff',
                              fontSize: 18,
                            }}
                            onClick={() => cancelEdit(tData.id)}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
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
                            onClick={() => editClick(tData.id)}
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
                        </>
                      )}
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
