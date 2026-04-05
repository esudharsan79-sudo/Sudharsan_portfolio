import React from "react";
import ResumeImg from "../assets/resume.jpg";

export default function Resume() {

    const config = {
        link: "/Sudharsan E (11).pdf"
    };

    return (

        <section id="resume" className="resume-section">

            {/* LEFT IMAGE */}
            <div className="resume-image">
                <img src={ResumeImg} alt="Resume Illustration" />
            </div>

            {/* RIGHT TEXT */}
            <div className="resume-text">

                <h1>Resume</h1>

                <p>
                    You can view my resume
                </p>

                <a className="btn" href={config.link} download>
                    Download
                </a>

            </div>

        </section>

    );
}