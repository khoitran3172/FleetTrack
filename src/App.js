import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AddVehicle from './pages/AddVehicle';
import AddTrip from './pages/AddTrip';
import VehicleList from './pages/VehicleList';
import TripList from './pages/TripList';
import Registration from './pages/Registration';
import Login from './pages/Login'; // Ensure you create this Login component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login state to true
  };

  return (
    <Router>
      <div style={{ display: 'flex',width:'100vw' }}>
        {<Sidebar />} {/* Show sidebar only when logged in */}
        <div className="content" id="content" style={{flex:'70%'}} >
          <Routes>
            <Route 
              path="/" 
              element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} 
            />
            <Route 
              path="/home" 
              element={isLoggedIn ? <Home /> : <Navigate to="/" />} 
            />
            <Route path="/add-vehicle" element=<AddVehicle/>/>
            <Route path="/add-trip" element={isLoggedIn ? <AddTrip /> : <Navigate to="/" />} />
            <Route path="/vehicle-list" element={isLoggedIn ? <VehicleList /> : <Navigate to="/" />} />
            <Route path="/trip-list" element={isLoggedIn ? <TripList /> : <Navigate to="/" />} />
            <Route path="/registration" element={isLoggedIn ? <Registration /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
