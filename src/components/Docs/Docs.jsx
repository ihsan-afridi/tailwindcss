import React, { useEffect, useState } from "react";

const Docs = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check the screen width and update the state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Styles for container
  const containerStyle = {
    marginLeft: isMobile ? "0" : "180px",
    padding: "20px",
    textAlign: isMobile ? "center" : "left",
  };

  return (
    <div style={containerStyle}>
      <div style={{ paddingLeft: "5px" }}>
        <h6>Installation</h6>
        <p>
          <h2>Get started with Tailwind CSS</h2>
        </p>
        <p>
          Tailwind CSS works by scanning all of your HTML files, JavaScript
          components, and any other templates for class names, generating the
          corresponding styles, and then writing them to a static CSS file.
        </p>
        <p>It's fast, flexible, and reliable — with zero-runtime.</p>

        <h6>Installation Methods</h6>
        <ul>
          <li>Using Vite</li>
          <li>Using PostCSS</li>
          <li>Tailwind CLI</li>
          <li>Framework Guides</li>
          <li>Play CDN</li>
        </ul>
        <p>
          Installing Tailwind CSS as a Vite plugin is the most seamless way to
          integrate it with frameworks like Laravel, SvelteKit, React Router,
          Nuxt, and SolidJS.
        </p>
      </div>

      <p className="lead" style={{ marginTop: "20px" }}>
        Welcome to Tailwind CSS documentation
      </p>
    </div>
  );
};

export default Docs;
