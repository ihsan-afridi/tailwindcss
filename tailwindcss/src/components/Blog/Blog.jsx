import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Blog = () => {
  const posts = [
    { id: 1, title: "Getting Started with Tailwind", date: "2024-03-02" },
    { id: 2, title: "Advanced Component Patterns", date: "2024-03-01" }
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Latest Posts</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item 
            key={post.id}
            action 
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{post.title}</div>
            </div>
            <span className="text-muted">{post.date}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Blog;