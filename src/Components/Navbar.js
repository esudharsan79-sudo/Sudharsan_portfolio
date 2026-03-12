import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}
      <a className="logo" href="#hero" aria-label="Go to Home section">
        Sudharsan E
      </a>

      {/* Desktop Menu */}
      <nav className="nav-desktop">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setToggleMenu(!toggleMenu)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {toggleMenu && (
        <nav className="nav-mobile">
          <ul onClick={() => setToggleMenu(false)}>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

    </header>
  );
}