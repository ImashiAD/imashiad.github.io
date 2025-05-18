import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useSectionInView from "../hooks/useSectionInView";

const Navigation: React.FC = () => {
  const location = useLocation();
  const contactInView = useSectionInView("contact");

  return (
    <nav>
      <div className="logo signature">イマシ</div>
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
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
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
