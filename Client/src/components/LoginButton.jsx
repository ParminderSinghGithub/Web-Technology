import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function LoginButton() {
    const navigate = useNavigate();
    const { isLoggedIn, logout, authToken } = useAuth();

    const handleLogin = () => {
        navigate("/login");
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <button onClick={isLoggedIn() ? handleLogout : handleLogin} id="Login">
            {isLoggedIn() ? <b>Logout</b> : <b>LOGIN</b>}
        </button>
    );
}

export default LoginButton;
