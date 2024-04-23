import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

function Login({ setUserLoggedIn, setUserId }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5050/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            
            if (data.message === "Successfully Logged-in") {
                setUserLoggedIn(true);
                setUserId(data.userId);
                login(data.token);
                navigate('/');
                window.location.reload();
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            console.log('Error:', error);
            setError("An error occurred while logging in");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='LoginPage'>
            <form id="FormLogin" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label><br />
                <input type="email" name="email" placeholder="Please enter your email id"
                    required value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="Please enter your password"
                    required value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <input type="submit" id="Login" value={loading ? "Logging in..." : "Login"} disabled={loading} /><br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <p> New user? <Link to="/signup"
                    style={{ textDecoration: "none" }}>Register/Signup</Link></p>
            </form>
        </div>
    );
}

export default Login;
