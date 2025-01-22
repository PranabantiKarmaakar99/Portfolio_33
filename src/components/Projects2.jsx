import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-teal-500 hover:underline"
                >
                  Learn More
                </Link>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
