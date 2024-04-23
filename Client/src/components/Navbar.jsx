import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/" className='navA'>Home</Link></li>
                <li><Link to="/colleges" className='navB'>Colleges</Link></li>
                <li><Link to="/eventcalendar" className='navB'>Event Calendar</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;