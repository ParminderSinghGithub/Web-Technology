import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("http://localhost:5050/registrationdetails", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            if (response.ok) {
                console.log("Registration successful");
                navigate('/login');
            } else {
                console.error("Registration failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error registering:", error);
        } finally{
            setLoading(false);
        }
    };

    return (
        <div id='SignupPage'>
            <form id="FormSignup" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input type="text" name="name" placeholder="Please enter your name"
                    required onChange={(e) => setName(e.target.value)} /><br /><br />
                <label htmlFor="email">Email:</label><br />
                <input type="email" name="email" placeholder="Please enter your email id"
                    required onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label htmlFor="password">Password:</label><br />
                <input type="password" placeholder="Please enter your password"
                    required onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <input type="submit" id="Signup" value="Signup" /><br />
                <p> Already have an account? <Link to="/login"
                    style={{ textDecoration: "none" }}>Login</Link></p>
            </form>
        </div>
    );
}

export default Signup;
