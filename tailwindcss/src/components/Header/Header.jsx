import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FiGithub } from "react-icons/fi";
import { RiTailwindCssFill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [selectedVersion, setSelectedVersion] = useState("v4.0");

  const handleSelect = (eventKey) => {
    setSelectedVersion(eventKey);
  };

  return (
    <Navbar
      style={{
        backgroundColor: "white",
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
        {/* Logo and Brand */}
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
            }}
          >
            tailwindcss
          </span>
        </Navbar.Brand>

        {/* Version Dropdown */}
        <NavDropdown
          title={selectedVersion}
          onSelect={handleSelect}
          style={{
            fontSize: "1rem",
            fontWeight: "500",
            color: "black",
            marginLeft: "1rem",
          }}
        >
          <NavDropdown.Item eventKey="v4.1">v4.1</NavDropdown.Item>
          <NavDropdown.Item eventKey="v5.2">v5.2</NavDropdown.Item>
          <NavDropdown.Item eventKey="v3.0">v3.0</NavDropdown.Item>
        </NavDropdown>

        {/* Mobile Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ border: "none" }}
        />

        {/* Navigation Links */}
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
