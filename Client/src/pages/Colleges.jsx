import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import Footer from "../components/Footer";
import CoursesForm from "../components/CollegesForm";

function Collegs() {
    return (
        <>
            <header style={{ height: "90px" }}>
                <Link to="/">
                    <img src="/Logo_.jpg" alt="VisionaryEd" width="5%"
                        height="auto" style={{ display: "inline", float: "left" }} className="VLogo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/eventcalendar" className='navC'>Event Calendar</Link></li>
                        <li><Link to="/colleges" className='navD'>Colleges</Link></li>
                        <li><Link to="/" className='navC'>Home</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <LoginButton></LoginButton>
                <CoursesForm></CoursesForm>
            </main>
            <Footer></Footer>
        </>
    );
}

export default Collegs;