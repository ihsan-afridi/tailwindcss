import React from "react";

const Templates = () => {
  const templates = [
    { title: "Template 1", description: "Description of Template 1." },
    { title: "Template 2", description: "Description of Template 2." },
    { title: "Template 3", description: "Description of Template 3." },
    { title: "Template 4", description: "Description of Template 4." },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "#00aaff",
          padding: "20px",
          borderRadius: "8px",
          color: "#fff",
          position: "relative",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "24px" }}>Templates</h1>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          TEMPLATES
        </div>
      </div>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {templates.map((template, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "15px",
              maxWidth: "300px",
              textAlign: "center",
              flex: "1 0 calc(33.33% - 20px)",
              minWidth: "250px",
            }}
          >
            <h2
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color: "#333",
              }}
            >
              {template.title}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#666",
                lineHeight: "1.5",
              }}
            >
              {template.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
