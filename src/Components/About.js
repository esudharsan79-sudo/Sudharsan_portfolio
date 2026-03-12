import React from "react";
import AboutImg from "../assets/about.png";

export default function About() {
    const config = {
        line1: "Hi, My name is Sudharsan E. I am a Frontend Developer Fresher. I build responsive and modern websites using HTML, CSS, JavaScript, and React.js.",
        line2: "I am proficient in Frontend skills like HTML5, CSS3, JavaScript, React.js, and Tailwind CSS.",
        line3: "I am eager to learn backend technologies like Node.js and MongoDB to become a full-stack developer."
    };

    return (
        <section className="about-section" id="about">

            <div className="about-image">
                <img src={AboutImg} alt="About" />
            </div>

            <div className="about-text">
                <h1>About Me</h1>
                <p>{config.line1}</p>
                <p>{config.line2}</p>
                <p>{config.line3}</p>
            </div>

        </section>
    );
}