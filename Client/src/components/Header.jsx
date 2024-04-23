import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link to="/">
                <img src="/Logo.jpg" alt="VisionaryEd" width="40%" height="auto" />
            </Link>
        </header>
    )
}

export default Header;