import React from "react";
import AboutImg from "../assets/about.png";

export default function About() {
    const config = {
        line1: "Hi, I'm Sudharsan E, a passionate Frontend Developer and 2025 Computer Science graduate.",
        line2: "I enjoy building responsive, user-friendly web applications using HTML5, CSS3, JavaScript, and React.js. I have hands-on experience developing projects such as an Expense Tracker, Todo List, and Quiz Application.",
        line3: "I'm continuously improving my frontend development skills and exploring backend technologies like Node.js and Java to expand my knowledge towards full-stack development.",
        line4: "I'm eager to learn, take on new challenges, and contribute to building meaningful web applications."
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
                <p>{config.line4}</p>
            </div>

        </section>
    );
}