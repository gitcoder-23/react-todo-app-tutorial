import React from 'react';
import Menu from './navigation/Menu';

const HomePage = () => {
  return (
    <div>
      <Menu />
      <div style={{fontSize:40, backgroundColor:'violet',marginTop:10}}>
        React Tutorial Projects</div>
    </div>
  );
};

export default HomePage;
