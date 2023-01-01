import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/Landing.js';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route exact path={"/"} element={
            <LandingPage/>}
          />
          
        </Routes>
      
    </div>
  );
}

export default App;
