import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about'  className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mx-10 px-10 text-gray-700">
        I’m a software developer with experience in building responsive web applications. I specialize in React, Node.js, and Tailwind CSS, and I’m passionate about creating user-friendly, scalable, and accessible digital products. Recently, I’ve expanded my skill set to include AI and machine learning, working on projects that integrate machine learning models for personalized recommendations and predictive analytics. I’m excited about leveraging AI to build smarter, more efficient solutions.
        </p>
       
        </div>
    </section>
  );
};

export default About;
