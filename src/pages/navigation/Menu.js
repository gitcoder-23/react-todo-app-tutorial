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
    </div>
  );
};

export default Menu;
