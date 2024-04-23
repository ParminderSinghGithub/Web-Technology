import React, { useState, useEffect } from 'react';

function CollegesIntro() {
    const [currentSlide, setCurrentSlide] = useState(1);

    const slideData = [
        {
            title: "IIT Bombay",
            link: "https://www.iitb.ac.in/",
            image: "/IITB.jpeg"
        },
        {
            title: "IIT Delhi",
            link: "https://home.iitd.ac.in/",
            image: "/IITD.jpeg"
        },
        {
            title: "IIT Roorkee",
            link: "https://www.iitr.ac.in/",
            image: "/IITR.jpeg"
        },
        {
            title: "IIT Guwahati",
            link: "https://www.iitg.ac.in/",
            image: "/IITG.jpeg"
        },
        {
            title: "IIT Kharagpur",
            link: "https://www.iitkgp.ac.in/",
            image: "/IITKh.jpeg"
        },
        {
            title: "IIT Kanpur",
            link: "https://www.iitk.ac.in/",
            image: "/IITKn.jpeg"
        },
        {
            title: "IIT Madras",
            link: "https://study.iitm.ac.in/ds/",
            image: "/IITM.jpeg"
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide % 7) + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleManualNavigation = (slideNum) => {
        setCurrentSlide(slideNum);
    };

    return (
        <div className="slider">
            <div className="slides">
                {Array.from({ length: 7 }).map((_, index) => (
                    <input
                        key={`radio${index + 1}`}
                        type="radio"
                        name="radio-btn"
                        id={`radio${index + 1}`}
                        checked={currentSlide === index + 1}
                        onChange={() => handleManualNavigation(index + 1)}
                    />
                ))}

                {slideData.map((slide, index) => (
                    <div key={index} className={`slidebar ${index === 0 ? 'first' : ''}`}>
                        <div className="txt">
                            <h2>{slide.title}</h2>
                            <button><a href={slide.link} target='_blank'>&#127760;</a></button>
                        </div>
                        <img src={slide.image} alt={slide.title} />
                    </div>
                ))}
            </div>

            {/* automatic navigation */}
            <div className="navigation-auto">
                {Array.from({ length: 7 }).map((_, index) => (
                    <div key={`auto-btn${index + 1}`} className={`auto-btn${index + 1}`}></div>
                ))}
            </div>

            {/* manual navigation */}
            <div className="navigation-manual">
                {Array.from({ length: 7 }).map((_, index) => (
                    <label key={`manual-btn${index + 1}`} htmlFor={`radio${index + 1}`} className="manual-btn"></label>
                ))}
            </div>
        </div>
    );
}

export default CollegesIntro;
