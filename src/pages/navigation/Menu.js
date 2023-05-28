import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <button>
        <Link to="/">Home</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/small-cal">Small Calculator App</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/small_count">Small Counter App</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/calculator">Small Calculator</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/counter"> Counter</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/small-counter"> CountByFourCounter</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/view"> ViewTodo</Link>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/todo"> Todo App</Link>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/create">CreateTodo</Link>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/demotodo">DemoTodo</Link>
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/userlist">Api User App</Link>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button>
        <Link to="/testloop">TestLoop</Link>
      </button>
      <button>
        <Link to="/userphotos">Userphotos</Link>
      </button>
    </div>
  );
};

export default Menu;
