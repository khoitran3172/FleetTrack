// src/App.js
import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddVehicle from './pages/AddVehicle';
import AddTrip from './pages/AddTrip'; // Bạn cần tạo trang này
import VehicleList from './pages/VehicleList'; // Bạn cần tạo trang này
import TripList from './pages/TripList'; // Bạn cần tạo trang này
import Registration from './pages/Registration'; // Bạn cần tạo trang này
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
      <Sidebar />
        <div className="content" id="content">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-vehicle" element={<AddVehicle />} />
            <Route path="/add-trip" element={<AddTrip />} />
            <Route path="/vehicle-list" element={<VehicleList />} />
            <Route path="/trip-list" element={<TripList />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
