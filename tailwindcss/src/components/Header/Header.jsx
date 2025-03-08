import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#f8f9fa",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        marginBottom: "1rem",
      }}
      expand="lg"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "0 1rem",
        }}
      >
        {/* Brand Section */}
        <Navbar.Brand
          as={NavLink}
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <RiTailwindCssFill style={{ color: "skyblue", fontSize: "2rem" }} />
          <span
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "1.5rem",
              lineHeight: "1.2",
              marginTop: "2px", // Adjust only this text
            }}
          >
            tailwindcss
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        />

        {/* Navigation Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              marginLeft: "auto",
            }}
          >
            <Nav.Link
              as={NavLink}
              to="/docs"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#6b21a8" : "#6c757d",
                backgroundColor: isActive ? "#f3e8ff" : "transparent",
                padding: "10px 15px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              })}
            >
              Docs
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/components"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#6b21a8" : "#6c757d",
                backgroundColor: isActive ? "#f3e8ff" : "transparent",
                padding: "10px 15px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              })}
            >
              Components
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/blog"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#6b21a8" : "#6c757d",
                backgroundColor: isActive ? "#f3e8ff" : "transparent",
                padding: "10px 15px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              })}
            >
              Blog
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/showcase"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#6b21a8" : "#6c757d",
                backgroundColor: isActive ? "#f3e8ff" : "transparent",
                padding: "10px 15px",
                borderRadius: "4px",
                transition: "all 0.3s ease",
              })}
            >
              Showcase
            </Nav.Link>

            {/* GitHub Icon */}
            <Nav.Link
              href="https://github.com/CurtK"
              target="_blank"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6c757d",
                textDecoration: "none",
                marginLeft: "15px",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#6b21a8")}
              onMouseLeave={(e) => (e.target.style.color = "#6c757d")}
            >
              <FiGithub style={{ fontSize: "1.5rem" }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
