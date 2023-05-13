// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ViewTodo from './pages/ViewTodo';
import CreateTodo from './pages/CreateTodo';

function App() {
  return (
    <>
      <div className="App">
        <h1>React Todo App</h1>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/view" element={<ViewTodo />} />
          <Route exact path="/create" element={<CreateTodo />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
