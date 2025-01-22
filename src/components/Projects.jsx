

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { projects } from '../data/projectsData'; // Import the data

// const Projects = () => {
//   useEffect(() => {
//     // GSAP Animations
//     gsap.from('.project-card', { opacity: 1, y: 50, stagger: 0.3, duration: 1, ease: 'power3.out' });
//   }, []);

//   return (
//     <section id="projects" className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project) => (
//             <div key={project.id} className="project-card bg-white shadow-lg rounded-lg p-6 space-y-4">
//               <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
//               <p className="text-gray-700">{project.description}</p>
              
             

//               {/* Project Details */}
//               <p className="text-gray-600 mt-4">{project.details}</p>

//                {/* Tech Stack */}
//                <div className="tech-stack">
//                 <h4 className="text-lg font-semibold mt-4">Tech Stack:</h4>
//                 <div className=" flex gap-4 p-0">
//                   {project.techStack.map((tech, idx) => (
//                     <div key={idx} className="flex items-center space-x-2 text-gray-700 hover:text-teal-500 transition duration-300">
//                       <span className="text-teal-500 font-semibold">{tech}</span>
                     
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="flex space-x-4 mt-6">
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition duration-300"
//                 >
//                   GitHub
//                 </a>
//                 {project.live && (
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg transition duration-300"
//                   >
//                     Live Demo
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from 'react';
import { projects } from '../data/projectsData'; // Import your projects data

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              
              {/* Tech Stack */}
              <div className="tech-stack">
                <h4 className="text-lg font-semibold mt-4">Tech Stack:</h4>
                <ul className="list-none p-0">
                  {project.techStack.map((tech, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700 hover:text-teal-500 transition duration-300">
                      <span className="text-teal-500 font-semibold">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Details */}
              <p className="text-gray-600 mt-4">{project.details}</p>

              <div className="flex space-x-4 mt-6">
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
                {/* Render APK download button if mobile link is provided */}
                {project.mobile && (
                  <a
                    href={project.mobile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline bg-teal-100 px-4 py-2 rounded-lg"
                  >
                    Download APK
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

