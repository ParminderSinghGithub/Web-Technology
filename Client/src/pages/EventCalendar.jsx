import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../components/LoginButton";
import Footer from "../components/Footer";

const CustomCalendar = () => {
    const calendarData = [
        { date: '27 April 2024', details: 'JEE Advanced Registration Begins' },
        { date: '7 May 2024', details: 'JEE Advanced Registration Ends' },
        { date: '17 May 2024', details: 'JEE Advanced Admit Card Available' },
        { date: '26 May 2024', details: 'JEE Advanced Exam' },
        { date: '9 June 2024', details: 'JEE Advanced Result & AAT Registration Begins' },
        { date: '10 June 2024', details: 'AAT Registration Ends' },
        { date: '12 June 2024', details: 'AAT Exam' },
        { date: '15 June 2024', details: 'AAT Result' },
    ];
    const renderCalendarData = () => {
        return calendarData.map(({ date, details }) => (
            <div key={date}>
                <p className="ExamDate"><b>{date}</b></p>
                <p className="ExamDetails">{details}</p>
            </div>
        ));
    };

    return (
        <>
            <header style={{ height: "90px" }}>
                <Link to="/">
                    <img src="/Logo_.jpg" alt="VisionaryEd" width="5%"
                        height="auto" style={{ display: "inline", float: "left" }} className="VLogo" />
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/eventcalendar" className='navD'>Event Calendar</Link></li>
                        <li><Link to="/colleges" className='navC'>Colleges</Link></li>
                        <li><Link to="/" className='navC'>Home</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <LoginButton></LoginButton>
                <p className="PageIntro">Discover upcoming IIT entrance exams:<br></br>
                    JEE Advanced and AAT (The Architecture Aptitude Test).</p>
                {renderCalendarData()}
            </main>
            <Footer></Footer>
        </>
    );
};

export default CustomCalendar;
