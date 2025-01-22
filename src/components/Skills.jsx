// import React from 'react';

// const skills = [
//   { category: 'Frontend Development', items: ['TypeScript', 'ReactJS', 'NextJS', 'TailwindCSS', 'GSAP'] },
//   { category: 'Backend Development', items: ['Node.js', 'Express', 'ASP.NET MVC', 'TypeScript', 'Python'] },
//   { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'SQL'] },
//   { category: 'ORM', items: ['Prisma', 'SQLAlchemy', 'Identity Framework'] },
//   { category: 'API Integration', items: ['RESTful APIs (NASA API, OpenStreet Maps, IMDB)'] },
//   { category: 'Cloud & Containerization', items: ['Docker', 'AWS EC2 Instances'] },
//   { category: 'Data Visualization', items: ['ChartJS'] },
//   { category: 'Machine Learning Libraries', items: ['scikit-learn (TF-IDF vectorization, Logistic Regression)'] },
//   { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel', 'Swagger', 'Postman', 'GraphQL'] },
//   { category: 'Other Skills', items: ['Responsive Design', 'UI/UX Principles', 'Mobile-first Design'] },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold mb-6">My Skills</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div key={index} className="p-4 bg-white rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
//               <ul className="list-disc list-inside text-left text-gray-700">
//                 {skill.items.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useEffect } from 'react';
import { gsap } from 'gsap';

// Import icons or logos (e.g., using Font Awesome or Heroicons)
import { FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { IoLogoPython } from 'react-icons/io';

const skills = [
  { category: 'Frontend Development', items: ['ReactJS', 'NextJS', 'TailwindCSS', 'GSAP'], icons: [<FaReact />, <SiNextdotjs />, <SiTailwindcss />, <FaReact />] },
  { category: 'Backend Development', items: ['Node.js', 'Express', 'ASP.NET MVC', 'Python'], icons: [<FaNodeJs />, <FaNodeJs />, <FaNodeJs />, <IoLogoPython />] },
  { category: 'Cloud & Containerization', items: ['Docker', 'AWS EC2 Instances'], icons: [<FaDocker />, <FaDocker />] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'SQL'], icons: [<FaReact />, <FaReact />, <FaReact />] }, // Replace with database icons
  { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vercel'], icons: [<FaReact />, <FaReact />, <FaReact />] } // Replace with tool icons
];

const Skills = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from('.skill-item', { opacity: 50, y: 50, stagger: 0.2, duration: 1, ease: 'power3.out' });
  }, []);

  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-md skill-item">
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-gray-700 hover:text-teal-500 transition duration-300">
                    <div className="text-2xl">{skill.icons[idx]}</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
