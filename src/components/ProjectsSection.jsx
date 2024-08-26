// src/components/ProjectsSection.jsx

import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace with dynamic content */}
          <div className="border p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="mt-2">Description of the first project.</p>
          </div>
          <div className="border p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="mt-2">Description of the second project.</p>
          </div>
          <div className="border p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold">Project 3</h3>
            <p className="mt-2">Description of the third project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
