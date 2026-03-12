import React from "react";

export default function Skills() {

    const skills = [
        { name: "HTML", level: "Advanced" },
        { name: "CSS", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React JS", level: "Basic" },
        { name: "SQL", level: "Basic" },
        { name: "Git", level: "Basic" },
        { name: "GitHub", level: "Basic" }
    ];

    return (

        <section id="skills" className="skills-section">

            <div className="skills-header">
                <h1>Skills</h1>
                <p>
                    These are the technologies and tools I use to build modern web applications.
                </p>
            </div>

            <div className="skills-grid">

                {skills.map((skill, index) => (

                    <div key={index} className="skill-card">

                        <h3>{skill.name}</h3>

                        <p>{skill.level}</p>

                    </div>

                ))}

            </div>

        </section>

    );

}