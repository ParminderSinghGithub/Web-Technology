import React, { useState } from "react";

function CollegesForm() {
    const [formData, setFormData] = useState(
        {
            Institute: '',
            AcademicProgramName: '',
            Quota: '',
            SeatType: '',
            Gender: '',
        }
    );
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const queryString = new URLSearchParams(formData).toString();
            const response = await fetch(`http://localhost:5050/collegedetails?${queryString}`);
            const data = await response.json();
            setFetchedData(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    const groupedData = fetchedData.reduce((acc, item) => {
        if (!acc[item.Institute]) {
            acc[item.Institute] = { academicPrograms: {}, logo: '', link: '' };
        }
        if (!acc[item.Institute].academicPrograms[item.AcademicProgramName]) {
            acc[item.Institute].academicPrograms[item.AcademicProgramName] = [];
        }
        acc[item.Institute].academicPrograms[item.AcademicProgramName].push(item);
        acc[item.Institute].logo = item.Logo; 
        acc[item.Institute].link = item.Link;
        return acc;
    }, {});

    return (
        <>
            <p className="PageIntro">Explore the legacy of excellence at the top 7 premier Indian Institutes of Technology (IITs),<br></br>
                where tradition meets innovation! <br></br>
                Select your academic program, specify your gender, and choose your preferred seat type to unlock the latest cutoff details. <br></br>
                Experience the journey to your dream institution with just a few clicks! </p>
            <form onSubmit={handleSubmit} className="CollegesForm">
                <label htmlFor="Institute">Select Institute</label><br />
                <select name="Institute" value={formData.Institute} onChange={handleInputChange} required>
                    <option value=''>Select Institute</option>
                    <option value='ALL'>All</option>
                    <option value='Indian Institute of Technology Bombay'>
                        Indian Institute of Technology Bombay
                    </option>
                    <option value='Indian Institute of Technology Delhi'>
                        Indian Institute of Technology Delhi
                    </option>
                    <option value='Indian Institute of Technology Roorkee'>
                        Indian Institute of Technology Roorkee
                    </option>
                    <option value='Indian Institute of Technology Guwahati'>
                        Indian Institute of Technology Guwahati
                    </option>
                    <option value='Indian Institute of Technology Kharagpur'>
                        Indian Institute of Technology Kharagpur
                    </option>
                    <option value='Indian Institute of Technology Kanpur'>
                        Indian Institute of Technology Kanpur
                    </option>
                    <option value='Indian Institute of Technology Madras'>
                        Indian Institute of Technology Madras
                    </option>
                </select><br /><br /><br />
                <label htmlFor="AcademicProgramName">Select Academic Program</label><br />
                <select name="AcademicProgramName" value={formData.AcademicProgramName}
                    onChange={handleInputChange} required>
                    <option value=''>Select Academic Program Name</option>
                    <option value='ALL'>All</option>
                    <option value='Aerospace Engineering (4 Years, Bachelor of Technology)'>
                        Aerospace Engineering
                    </option>
                    <option value='Aerospace Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Aerospace Engineering(Dual Degree)
                    </option>
                    <option value='Agricultural and Food Engineering (4 Years, Bachelor of Technology)'>
                        Agricultural and Food Engineering
                    </option>
                    <option value='Agricultural and Food Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Agricultural and Food Engineering(Dual Degree)
                    </option>
                    <option value='Applied Geology (4 Years, Bachelor of Science)'>
                        Applied Geology
                    </option>
                    <option value='Architecture (5 Years, Bachelor of Architecture)'>
                        Architecture
                    </option>
                    <option value='Biological Sciences and Bioengineering (4 Years, Bachelor of Technology)'>
                        Biological Sciences and Bioengineering
                    </option>
                    <option value='Biotechnology and Biochemical Engineering (4 Years, Bachelor of Technology)'>
                        Biotechnology and Biochemical Engineering
                    </option>
                    <option value='Biotechnology and Biochemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Biotechnology and Biochemical Engineering(Dual Degree)
                    </option>
                    <option value='Chemical Engineering (4 Years, Bachelor of Technology)'>
                        Chemical Engineering
                    </option>
                    <option value='Chemical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Chemical Engineering(Dual Degree)
                    </option>
                    <option value='Chemical Science and Technology (4 Years, Bachelor of Technology)'>
                        Chemical Science and Technology
                    </option>
                    <option value='Chemistry (4 Years, Bachelor of Science)'>
                        Chemistry
                    </option>
                    <option value='Civil Engineering (4 Years, Bachelor of Technology)'>
                        Civil Engineering
                    </option>
                    <option value='Civil Engineering with any of the listed specialization (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Civil Engineering(Dual Degree)
                    </option>
                    <option value='Computer Science and Engineering (4 Years, Bachelor of Technology)'>
                        Computer Science and Engineering
                    </option>
                    <option value='Computer Science and Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Computer Science and Engineering(Dual Degree)
                    </option>
                    <option value='Data Science and Artificial Intelligence (4 Years, Bachelor of Technology)'>
                        Data Science and Artificial Intelligence
                    </option>
                    <option value='Earth Sciences (4 Years, Bachelor of Science)'>
                        Earth Sciences
                    </option>
                    <option value='Economics (4 Years, Bachelor of Science)'>
                        Economics
                    </option>
                    <option value='Economics (5 Years, Bachelor of Science and Master of Science (Dual Degree))'>
                        Economics(Dual Degree)
                    </option>
                    <option value='Electrical Engineering (4 Years, Bachelor of Technology)'>
                        Electrical Engineering
                    </option>
                    <option value='Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Electrical Engineering(Dual Degree)
                    </option>
                    <option value='Electrical Engineering (Power and Automation) (4 Years, Bachelor of Technology)'>
                        Electrical Engineering (Power and Automation)
                    </option>
                    <option value='Electrical Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Electrical Engineering
                    </option>
                    <option value='Electronics and Communication Engineering (4 Years, Bachelor of Technology)'>
                        Electronics and Communication Engineering
                    </option>
                    <option value='Electronics and Electrical Communication Engineering (4 Years, Bachelor of Technology)'>
                        Electronics and Electrical Communication Engineering
                    </option>
                    <option value='Electronics and Electrical Communication Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Electronics and Electrical Communication Engineering(Dual Degree)
                    </option>
                    <option value='Engineering and Computational Mechanics (4 Years, Bachelor of Technology)'>
                        Engineering and Computational Mechanics
                    </option>
                    <option value='Engineering Physics (4 Years, Bachelor of Technology)'>
                        Engineering Physics
                    </option>
                    <option value='Exploration Geophysics (4 Years, Bachelor of Science)'>
                        Exploration Geophysics
                    </option>
                    <option value='Industrial and Systems Engineering (4 Years, Bachelor of Technology)'>
                        Industrial and Systems Engineering
                    </option>
                    <option value='Industrial and Systems Engineering with M.Tech. in Industrial and Systems Engineering and Management (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Industrial and Systems Engineering(Dual Degree)
                    </option>
                    <option value='Instrumentation Engineering (4 Years, Bachelor of Technology)'>
                        Instrumentation Engineering
                    </option>
                    <option value='Manufacturing Science and Engineering (4 Years, Bachelor of Technology)'>
                        Manufacturing Science and Engineering
                    </option>
                    <option value='Manufacturing Science and Engineering with M.Tech. in Industrial and Systems Engineering and Management (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Manufacturing Science and Engineering(Dual Degree)
                    </option>
                    <option value='Materials Engineering (4 Years, Bachelor of Technology)'>
                        Materials Engineering
                    </option>
                    <option value='Materials Science and Engineering (4 Years, Bachelor of Technology)'>
                        Materials Science and Engineering
                    </option>
                    <option value='Mathematics & Computing (5 Years, Bachelor of Science and Master of Science (Dual Degree))'>
                        Mathematics & Computing(Dual Degree)
                    </option>
                    <option value='Mathematics and Computing (4 Years, Bachelor of Technology)'>
                        Mathematics and Computing
                    </option>
                    <option value='Mathematics and Computing (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Mathematics and Computing(Dual Degree)
                    </option>
                    <option value='Mathematics and Scientific Computing (4 Years, Bachelor of Science)'>
                        Mathematics and Scientific Computing
                    </option>
                    <option value='Mechanical Engineering (4 Years, Bachelor of Technology)'>
                        Mechanical Engineering
                    </option>
                    <option value='Mechanical Engineering (4 Years, Bachelor of Technology)'>
                        Mechanical Engineering
                    </option>
                    <option value='Mechanical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Mechanical Engineering(Dual Degree)
                    </option>
                    <option value='Mechanical Engineering with M.Tech. in any of the listed specializations (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Mechanical Engineering(Dual Degree with specialization)
                    </option>
                    <option value='Metallurgical and Materials Engineering (4 Years, Bachelor of Technology)'>
                        Metallurgical and Materials Engineering
                    </option>
                    <option value='Metallurgical and Materials Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Metallurgical and Materials Engineering(Dual Degree)
                    </option>
                    <option value='Mining Engineering (4 Years, Bachelor of Technology)'>
                        Mining Engineering
                    </option>
                    <option value='Mining Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Mining Engineering(Dual Degree)
                    </option>
                    <option value='Mining Safety Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Mining Safety Engineering(Dual Degree)
                    </option>
                    <option value='Ocean Engineering and Naval Architecture (4 Years, Bachelor of Technology)'>
                        Ocean Engineering and Naval Architecture
                    </option>
                    <option value='Ocean Engineering and Naval Architecture (5 Years, Bachelor and Master of Technology (Dual Degree))'>
                        Ocean Engineering and Naval Architecture(Dual Degree)
                    </option>
                    <option value='Physics (4 Years, Bachelor of Science)'>
                        Physics
                    </option>
                    <option value='Physics (5 Years, Bachelor of Science and Master of Science (Dual Degree))'>
                        Physics(Dual Degree)
                    </option>
                    <option value='Production and Industrial Engineering (4 Years, Bachelor of Technology)'>
                        Production and Industrial Engineering
                    </option>
                    <option value='Statistics and Data Science (4 Years, Bachelor of Science)'>
                        Statistics and Data Science
                    </option>
                    <option value='Textile Technology (4 Years, Bachelor of Technology)'>
                        Textile Technology
                    </option>
                </select><br /><br /><br />
                <label htmlFor="Quota">Quota</label><br></br>
                <select name="Quota" value={formData.Quota} onChange={handleInputChange} required>
                    <option value=''>Select Quota</option>
                    <option value='ALL'>All</option>
                    <option value='AI'>All India</option>
                </select><br /><br /><br />
                <label htmlFor="SeatType">SeatType</label><br></br>
                <select name="SeatType" value={formData.SeatType} onChange={handleInputChange} required>
                    <option value=''>Select Seat Type</option>
                    <option value='ALL'>All</option>
                    <option value='OPEN'>OPEN</option>
                    <option value='OPEN (PwD)'>OPEN PwD</option>
                    <option value='EWS'>EWS</option>
                    <option value='OBC-NCL'>OBC-NCL</option>
                    <option value='OBC-NCL (PwD)'>OBC-NCL PwD</option>
                    <option value='SC'>SC</option>
                    <option value='SC (PwD'>SC PwD</option>
                    <option value='ST'>ST</option>
                </select><br /><br /><br />
                <label htmlFor="Gender">Gender</label><br></br>
                <select name="Gender" value={formData.Gender} onChange={handleInputChange} required>
                    <option value=''>Select Gender</option>
                    <option value='ALL'>All</option>
                    <option value='Gender-Neutral'>Gender Neutral</option>
                    <option value='Female-only (including Supernumerary)'>Female only</option>
                </select><br /><br /><br />
                <input type="submit" value={loading ? "Submitting..." : "Submit"} disabled={loading} id="Submit" /><br />
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
            {Object.entries(groupedData).map(([institute, data]) => (
                <div key={institute} className="Institute">
                    <a href={data.link} target="_blank">
                    <img src={data.logo} alt="IIT Logo" id="IITImg"></img>
                    </a>
                    <h2>{institute}</h2>
                    {Object.entries(data.academicPrograms).map(([academicProgram, programsData]) => (
                        <div key={academicProgram}>
                            <h3>{academicProgram}</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Quota</th>
                                        <th>Seat Type</th>
                                        <th>Gender</th>
                                        <th>Opening Rank</th>
                                        <th>Closing Rank</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(programsData) ? (
                                        programsData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.Quota}</td>
                                                <td>{item.SeatType}</td>
                                                <td>{item.Gender}</td>
                                                <td>{item.OpeningRank}</td>
                                                <td>{item.ClosingRank}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5">No data available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}

export default CollegesForm;
