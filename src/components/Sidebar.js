// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 onClick={() => window.location.reload()}>FleetTrack</h2>
      <Link to="/" className="add-btn">Home</Link>
      <Link to="/add-vehicle" className="add-btn">Add Vehicle</Link>
      <Link to="/add-trip" className="add-btn">Add Trip</Link>
      <Link to="/vehicle-list" className="add-btn">Vehicle List</Link>
      <Link to="/trip-list" className="add-btn">Trip List</Link>
      <Link to="/registration" className="add-btn">Registration</Link>
    </div>
  );
};

export default Sidebar;
