import { useState } from "react";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="navbar">
      <a className="logo" href="#">Sudharsan E</a>

      {/* Desktop Menu */}
      <nav className="nav-desktop">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <button className="hamburger" onClick={() => setToggleMenu(!toggleMenu)}>
        ☰
      </button>

      {toggleMenu && (
        <nav className="nav-mobile">
          <ul onClick={() => setToggleMenu(false)}>
            <li><a href="#">Home</a></li>
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