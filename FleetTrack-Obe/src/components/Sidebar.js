import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Import file CSS để style

const Sidebar = () => {
    const location = useLocation(); // Hook để lấy path hiện tại và kích hoạt trạng thái active

    return (
        <div className="sidebar">
            <h2 onClick={() => window.location.reload()}>FleetTrack</h2>
            <Link to="/add-vehicle" className={`add-btn ${location.pathname === '/add-vehicle' ? 'active' : ''}`}>
                <i className="fa fa-car"></i> Add Vehicle
            </Link>
            <Link to="/add-trip" className={`add-btn ${location.pathname === '/add-trip' ? 'active' : ''}`}>
                <i className="fa fa-suitcase"></i> Add Trip
            </Link>
            <Link to="/vehicle-list" className={`add-btn ${location.pathname === '/vehicle-list' ? 'active' : ''}`}>
                <i className="fa fa-list-alt"></i> Vehicle List
            </Link>
            <Link to="/trip-list" className={`add-btn ${location.pathname === '/trip-list' ? 'active' : ''}`}>
                <i className="fa fa-list"></i> Trip List
            </Link>
            <Link to="/registration" className={`add-btn ${location.pathname === '/registration' ? 'active' : ''}`}>
                <i className="fa fa-clipboard"></i> Registration
            </Link>
        </div>
    );
};

export default Sidebar;
