// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ViewTodo from './pages/todoApp/ViewTodo';
import CreateTodo from './pages/todoApp/CreateTodo';
import Counter from './pages/otherApp/Counter';
import SmallCalculator from './pages/otherApp/SmallCalculator';
import SmallCounterApp from './pages/miniAps/SmallCounterApp';
import SmallCounterByFourApp from './pages/myProjectTasks/SmallCounterByFourApp';
import SmallCalculatorApp from './pages/miniAps/SmallCalculatorApp';

function App() {
  return (
    <>
      <div className="App">
        <h1>React All Apps Tutorial dev</h1>
        <Routes>
          <Route exact path="/" element={<SmallCalculatorApp />} />
          <Route exact path="/small_count" element={<SmallCounterApp />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/calculator" element={<SmallCalculator />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/view" element={<ViewTodo />} />
          <Route exact path="/create" element={<CreateTodo />} />
          <Route
            exact
            path="/small-counter"
            element={<SmallCounterByFourApp />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
