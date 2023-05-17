// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Counter from './pages/otherApp/Counter';
import SmallCalculator from './pages/otherApp/SmallCalculator';
import SmallCounterApp from './pages/miniAps/SmallCounterApp';
import SmallCounterByFourApp from './pages/myProjectTasks/SmallCounterByFourApp';
import SmallCalculatorApp from './pages/miniAps/SmallCalculatorApp';
import MainTodo from './pages/todoApp/Maintodo';

function App() {
  return (
    <>
      <div className="App">
        <h1>React All Apps Tutorial dev</h1>
        <Routes>
          <Route exact path="/cal" element={<SmallCalculatorApp />} />
          <Route exact path="/small_count" element={<SmallCounterApp />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/calculator" element={<SmallCalculator />} />
          <Route exact path="/counter" element={<Counter />} />
          <Route exact path="/" element={<MainTodo />} />
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
