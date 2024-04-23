import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div>
                <h2>Frequently Asked Questions</h2>
                Please click <Link to="/faqs" style={{ color: "burlywood", fontStyle: "italic" }}>here</Link> for FAQs.
            </div>
            <hr />
            <div>
                <h2>Contact Us</h2>
                <div style={{color: "red"}}>
                    &#9993;<br />
                    <div style={{color: "bisque"}}>visionaryedowner@gmail.com</div>
                    <hr />
                </div>
                &copy; 2024 VisionaryEd. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;