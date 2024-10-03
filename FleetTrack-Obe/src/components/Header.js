import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="icons">
                <Link to="/notifications">
                    <i className="fa fa-bell" aria-hidden="true"></i> {/* Notification Icon */}
                </Link>
                <Link to="/home">
                    <i className="fa fa-home" aria-hidden="true"></i> {/* Home Icon */}
                </Link>
            </div>
        </div>
    );
};

export default Header;
