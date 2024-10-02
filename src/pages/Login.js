import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you create this CSS file


const Login = ({ onLogin }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSignIn = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        onLogin(); // Call the onLogin function passed as a prop
        navigate('/home'); // Navigate to the Home page
    };

    return (
        <div className="login-container">
            <div className="image-section">
            <img src="/img/image.png" alt="Fleettrack" /> 
            </div>
            <div className="form-section">
                <h1>FleetTrack</h1>
                <form onSubmit={handleSignIn}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <button type="submit" className="login-button">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
