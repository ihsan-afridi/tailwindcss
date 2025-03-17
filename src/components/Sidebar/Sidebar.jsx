import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaCogs,
  FaPaintBrush,
  FaPlay,
  FaUsers,
  FaRocket,
  FaDownload,
  FaEdit,
  FaSync,
  FaArrowUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar visibility
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navItems = [
    { to: "/documentation", text: "Documentation", icon: <FaBook /> },
    { to: "/components", text: "Components", icon: <FaCogs /> },
    { to: "/templates", text: "Templates", icon: <FaPaintBrush /> },
    { to: "/playground", text: "Playground", icon: <FaPlay /> },
    { to: "/community", text: "Community", icon: <FaUsers /> },
    { to: "/getting-started", text: "Getting started", icon: <FaRocket /> },
    { to: "/installation", text: "Installation", icon: <FaDownload /> },
    { to: "/editor-setup", text: "Editor setup", icon: <FaEdit /> },
    { to: "/compatibility", text: "Compatibility", icon: <FaSync /> },
    { to: "/upgrade-guide", text: "Upgrade guide", icon: <FaArrowUp /> },
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setIsOpen(true); // Always show sidebar on desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar styles
  const sidebarStyle = {
    width: isOpen ? "280px" : "0",
    backgroundColor: "#f8f9fa",
    position: "fixed",
    top: "65px",
    left: 0,
    bottom: "10px",
    padding: isOpen ? "1rem" : "0",
    height: "calc(100vh - 87px)",
    overflowY: "auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    zIndex: 1000,
    transition: "all 0.3s ease",
  };

  // Mobile toggle button styles
  const toggleButtonStyle = {
    display: windowWidth < 768 ? "block" : "none",
    position: "fixed",
    top: "85px",
    left: "10px",
    zIndex: 1001,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "10px 15px",
    cursor: "pointer",
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        style={toggleButtonStyle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle sidebar"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <nav style={sidebarStyle}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {navItems.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px", color: "lightblack" }}>
                {item.icon}
              </span>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  display: "block",
                  textDecoration: "none",
                  padding: "10px 15px",
                  color: isActive ? "#fff" : "#007bff",
                  backgroundColor: isActive ? "#007bff" : "transparent",
                  borderRadius: "4px",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                  flexGrow: 1,
                })}
                onClick={() => setIsOpen(false)} // Close sidebar after clicking a link
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overlay for mobile */}
      {windowWidth < 768 && isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setIsOpen(false)} // Close sidebar when clicking outside
        />
      )}
    </>
  );
};

export default Sidebar;
