import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <a
          href="mailto:your.email@example.com"
          className="bg-teal-500 px-6 py-3 rounded-lg text-white hover:bg-teal-400"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
};

export default Contact;
