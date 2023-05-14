// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ViewTodo from './pages/todoApp/ViewTodo';
import CreateTodo from './pages/todoApp/CreateTodo';
import Counter from './pages/otherApp/Counter';

function App() {
  return (
    <>
      <div className="App">
        <h1>React All Apps</h1>
        <Routes>
          <Route exact path="/" element={<Counter />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/view" element={<ViewTodo />} />
          <Route exact path="/create" element={<CreateTodo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
