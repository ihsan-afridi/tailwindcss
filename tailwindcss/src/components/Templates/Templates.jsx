import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const Templates = () => {
  const templates = [
    { title: "Template 1", description: "Description of Template 1." },
    { title: "Template 2", description: "Description of Template 2." },
    { title: "Template 3", description: "Description of Template 3." },
    { title: "Template 4", description: "Description of Template 4." },
  ];

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div
        className="d-flex justify-content-between align-items-center p-3 mb-4"
        style={{
          backgroundColor: "skyblue",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <h1 className="mb-0">Templates</h1>
        {/* "TEMPLATES" in the top-left corner */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            fontWeight: "bold",
            color: "#fff",
            fontSize: "18px",
          }}
        >
          
        </div>
      </div>

      {/* Cards Section */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {templates.map((template, index) => (
          <Col key={index}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{template.title}</Card.Title>
                <Card.Text>{template.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Templates;
