import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Icon from "./Icon";
import dp from "../assets/img/nav-about.png";
import SVGFilters from "./SVGFilters";
import useSectionInView from "../hooks/useSectionInView";

const Navigation: React.FC = () => {
  const projectsInView = useSectionInView("projects");

  return (
    <>
      <div className="glass-container nav-menu">
        <div className="glass-filter" style={{ filter: "url(#lg-dist)" }}></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        <SVGFilters />
        <nav className="glass-content glass-content-inline">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="glass-container nav-item">
              <div className="glass-filter"></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div className="glass-content glass-content-item">
                <Icon name="nav-home" size={26} className="icon" />
              </div>
            </div>
          </NavLink>
          <HashLink
            smooth
            to="/#projects"
            className={projectsInView ? "active" : ""}
          >
            <div className="glass-container nav-item">
              <div className="glass-filter"></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div className="glass-content glass-content-item">
                <Icon name="nav-work" size={24} className="icon" />
              </div>
            </div>
          </HashLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="glass-container nav-item">
              <div className="glass-filter"></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div className="glass-content glass-content-item">
                <img className="dp-img" src={dp} alt="Display Picture" />
              </div>
            </div>
          </NavLink>
          <NavLink
            to="../assets/Imashi_Dissanayake_Resume.pdf"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="glass-container nav-item">
              <div className="glass-filter"></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div className="glass-content glass-content-item">
                <Icon name="nav-cv" size={24} className="icon" />
              </div>
            </div>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/imashi-dissanayake/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <div className="glass-container nav-item">
              <div className="glass-filter"></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div className="glass-content glass-content-item">
                <Icon name="nav-linkedin" size={24} className="icon" />
              </div>
            </div>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
