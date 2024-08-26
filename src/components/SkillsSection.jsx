// src/components/SkillsSection.jsx

import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <ul className="list-disc list-inside space-y-4">
          <li className="text-lg">Skill 1</li>
          <li className="text-lg">Skill 2</li>
          <li className="text-lg">Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
