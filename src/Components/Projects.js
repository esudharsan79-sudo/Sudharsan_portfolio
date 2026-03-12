import React from "react";
import todoImg from "../assets/todo-list.jpg";
import quizImg from "../assets/quiz-app.jpg";

export default function Projects() {

    const projects = [

        {
            image: todoImg,
            description: "Todo List Application built using React.js with Local Storage. Users can add, delete, and manage daily tasks with persistent data storage.",
            github: "https://github.com/esudharsan79-sudo/Todo-list.git",
            demo: "https://todo-list-two-ruddy-89.vercel.app"
        },

        {
            image: quizImg,
            description: "Interactive Quiz Application built using Vite + React. It dynamically loads questions and calculates scores instantly.",
            github: "https://github.com/esudharsan79-sudo/Quiz-App.git",
            demo: "https://quiz-app-8e9y.vercel.app"
        }
    ];
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h1>Projects</h1>
                <p>
                    These are some of my best projects. I built them using React and modern web technologies.
                </p>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt="Project" />
                        <div className="project-overlay">
                            <p>{project.description}</p>
                            <div className="project-buttons">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    Source Code
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}