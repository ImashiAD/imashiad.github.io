import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useSectionInView from "../hooks/useSectionInView";

const Navigation: React.FC = () => {
  const projectsInView = useSectionInView("projects");
  const contactInView = useSectionInView("contact");

  return (
    <nav>
      <NavLink to="/" className="logo signature">
        イマシ
      </NavLink>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#projects"
            className={projectsInView ? "active" : ""}
          >
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to="/#contact"
            className={contactInView ? "active" : ""}
          >
            Contact
          </HashLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
