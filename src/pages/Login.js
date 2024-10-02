import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you create this CSS file

const API_URL = 'https://66850e3656e7503d1ae22ace.mockapi.io/api/demo/account';

const Login = ({ onLogin }) => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const [isRegister, setIsRegister] = useState(false); // Track whether the user is on the login or register form
    const [passwordError, setPasswordError] = useState(''); // Track password match error
    const [apiError, setApiError] = useState(''); // Track API errors

    // Handle user sign-in
    const handleSignIn = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const username = event.target.elements['username'].value;
        const password = event.target.elements['password'].value;

        try {
            const response = await fetch(API_URL);
            const users = await response.json();
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                onLogin(); // Call the onLogin function passed as a prop
                navigate('/home'); // Navigate to the Home page
            } else {
                setApiError('Invalid username or password');
            }
        } catch (error) {
            setApiError('Error connecting to the server');
        }
    };

    // Handle user registration
    const handleRegister = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        const username = event.target.elements['reg-username'].value;
        const password = event.target.elements['reg-password'].value;
        const confirmPassword = event.target.elements['reg-confirm-password'].value;

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match'); // Set the error message if passwords don't match
            return; // Prevent form submission
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert('Registration successful');
                setIsRegister(false); // After registration, switch back to the login form
            } else {
                setApiError('Error registering user');
            }
        } catch (error) {
            setApiError('Error connecting to the server');
        }
    };

    const toggleRegister = () => {
        setIsRegister((prev) => !prev); // Toggle between login and register forms
        setPasswordError(''); // Clear password error
        setApiError(''); // Clear API error
    };

    return (
        <div className="login-container">
            <div className="image-section">
                <img src="/img/image.png" alt="Fleettrack" />
            </div>
            <div className="form-section">
                <h1 style={{ color: 'black', fontSize: 80 }}>FleetTrack</h1>
                <div>
                    {isRegister ? (
                        <>
                            <h3 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Register</h3>
                            <p>Create your FleetTrack account</p>
                        </>
                    ) : (
                        <>
                            <h3 style={{ fontSize: 30, marginTop: 10, marginBottom: 10 }}>Sign in</h3>
                            <p>to continue to your FleetTrack account</p>
                        </>
                    )}
                </div>
                {isRegister ? (
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input type="text" id="reg-username" placeholder="Username" required />
                        </div>
                        <div className="form-group">
                            <input type="password" id="reg-password" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <input type="password" id="reg-confirm-password" placeholder="Confirm Password" required />
                        </div>
                        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                        {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
                        <button type="submit" className="login-button">Register</button>
                        <p>Already have an account? <a href="#" onClick={toggleRegister}>Sign in here</a></p>
                    </form>
                ) : (
                    <form onSubmit={handleSignIn}>
                        <div className="form-group">
                            <input type="text" id="username" placeholder="Username" required />
                        </div>
                        <div className="form-group">
                            <input type="password" id="password" placeholder="Password" required />
                        </div>
                        {apiError && <p style={{ color: 'red' }}>{apiError}</p>}
                        <a href="#" style={{position: 'absolute', right:0}}>Forgot password?</a>
                        <p>Don't have an account? <a href="#" onClick={toggleRegister}>Register here</a></p>
                        <button type="submit" className="login-button">Sign In</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
