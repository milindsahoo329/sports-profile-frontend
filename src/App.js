import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/Landing.js';
import CreateProfile from './components/CreateProfile.js';
import ViewProfiles from './components/ViewProfiles';
import EditProfile from './components/EditProfile';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "OpenSponsorship";  
  }, []);

  return (
    <div className="App">

        <Routes>
          <Route exact path={"/"} element={
            <LandingPage/>}
          />
          <Route exact path={"/create"} element={
            <CreateProfile />}
          />
          <Route exact path={"/view"} element={
            <ViewProfiles />}
          />
          <Route exact path={"/edit"} element={
            <EditProfile />}
          />
        </Routes>
      
    </div>
  );
}

export default App;
