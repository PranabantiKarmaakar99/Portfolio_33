import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/projects" className="text-teal-500 mt-4 inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-700 text-lg mb-4">{project.details}</p>
        <div className="flex space-x-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:underline"
          >
            GitHub
          </a>
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
        <Link
          to="/projects"
          className="block mt-6 text-teal-500 hover:underline"
        >
          Back to Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectPage;
