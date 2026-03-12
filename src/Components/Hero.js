import React from "react";
import HeroImg from "../assets/hero.png";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

export default function Hero() {

  const config = {
    subtitle: "I'm a Junior Frontend Developer",
    social: {
      github: "https://github.com/esudharsan79-sudo",
      linkedin: "https://www.linkedin.com/in/esudharsan79?"
    }
  };

  return (
    <section className="hero-section">

      {/* Left Text */}
      <div className="hero-text">
        <h1>
          Hi,<br />
          I'm Sudharsan E
        </h1>

        <p className="subtitle">{config.subtitle}</p>

        <div className="social-icons">
          <a href={config.social.github} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={35} />
          </a>

          <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
            <AiOutlineLinkedin size={35} />
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img src={HeroImg} alt="Developer Illustration" />
      </div>

    </section>
  );
}