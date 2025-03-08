import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Components = () => {
  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div
        className="d-flex justify-content-between align-items-center p-3 mb-4"
        style={{
          backgroundColor: 'skyblue',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        {/* "PLUS" in the top-left corner */}
        <div
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontWeight: 'bold',
            color: '#fff',
            fontSize: '18px',
          }}
        >
          PLUS
        </div>

        <h1 className="mb-0 text-center w-100">Tailwind Components</h1>
      </div>

      {/* Cards Section */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {[1, 2, 3].map((item) => (
          <Col key={item}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Component {item}</Card.Title>
                <Card.Text>
                  Pre-styled Tailwind component example
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Components;
