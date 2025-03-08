import React from "react";

const TailwindSetupGuide = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    gap: "20px",
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    width: "100%",
  };

  const leftStyle = {
    flex: "1 1 300px",
    minWidth: "240px",
    maxWidth: "350px",
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const rightStyle = {
    flex: "1 1 300px",
    minWidth: "240px",
    maxWidth: "350px",
    backgroundColor: "#000",
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
    fontSize: "14px",
    lineHeight: "1.6",
  };

  const numberStyle = {
    display: "inline-block",
    width: "24px",
    height: "24px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "24px",
    marginRight: "10px",
    fontSize: "12px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center" }}>Steps to Set Up Tailwind CSS</h2>

      <div style={rowStyle}>
        {/* Step 1 */}
        <div style={leftStyle}>
          <h3>
            <span style={numberStyle}>01</span> Install Tailwind CSS
          </h3>
          <p>Install tailwindcss and @tailwindcss/vite via npm.</p>
        </div>
        <div style={rightStyle}>
          <h3>Terminal</h3>
          <p>npm install tailwindcss @tailwindcss/vite</p>
        </div>
      </div>

      <div style={rowStyle}>
        {/* Step 2 */}
        <div style={leftStyle}>
          <h3>
            <span style={numberStyle}>02</span> Configure the Vite Plugin
          </h3>
          <p>Add the @tailwindcss/vite plugin to your Vite configuration.</p>
        </div>
        <div style={rightStyle}>
          <h3>Vite Config</h3>
          <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
            {`import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});`}
          </pre>
        </div>
      </div>

      <div style={rowStyle}>
        {/* Step 3 */}
        <div style={leftStyle}>
          <h3>
            <span style={numberStyle}>03</span> Import Tailwind CSS
          </h3>
          <p>Add an @import to your CSS file that imports Tailwind CSS.</p>
        </div>
        <div style={rightStyle}>
          <h3>CSS</h3>
          <p>@import "tailwindcss";</p>
        </div>
      </div>

      <div style={rowStyle}>
        {/* Step 4 */}
        <div style={leftStyle}>
          <h3>
            <span style={numberStyle}>04</span> Start Your Build Process
          </h3>
          <p>Run your build process with npm run dev or the configured command.</p>
        </div>
        <div style={rightStyle}>
          <h3>Terminal</h3>
          <p>npm run dev</p>
        </div>
      </div>

      <div style={rowStyle}>
        {/* Step 5 */}
        <div style={leftStyle}>
          <h3>
            <span style={numberStyle}>05</span> Start Using Tailwind
          </h3>
          <p>Make sure your compiled CSS is included in the <head/> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.</p>
        </div>
        <div style={rightStyle}>
          <h3>HTML</h3>
          <pre style={{ fontSize: "12px", whiteSpace: "pre-wrap" }}>
            {`<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/styles.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TailwindSetupGuide;