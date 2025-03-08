import React from 'react';

const Showcase = () => {
  const projects = [
    { id: 1, name: "E-commerce Site", tech: "React + Tailwind" },
    { id: 2, name: "Portfolio Template", tech: "Next.js" }
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Project Showcase</h1>
      <div className="row g-4">
        {projects.map(project => (
          <div key={project.id} className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text text-muted">{project.tech}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;