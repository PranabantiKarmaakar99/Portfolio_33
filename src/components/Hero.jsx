

// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';
// import A from '../assets/cartoonPK.png';

// const Hero = () => {
//   useEffect(() => {
//     gsap.fromTo('.hero-title', 
//       { opacity: 0, y: -100 }, 
//       { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });

//     gsap.fromTo('.hero-description', 
//       { opacity: 0, y: 50 }, 
//       { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' });

//     gsap.fromTo('.explore-btn', 
//       { opacity: 0, scale: 0.5 }, 
//       { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: 'back.out(1.7)' });
//   }, []);

//   return (
//     <section className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center px-6 relative" 
//              style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       {/* Logo */}
//       {/* <div className="absolute top-6 left-6">
//         <img src="/path/to/your/logo.png" alt="Logo" className="w-12 h-12" />
//       </div> */}
//       {/* Profile Image */}
//       <div className="mt-4">
//         <img src={A} alt="Profile" className="rounded-full w-64 object-cover h-64 border-4 border-teal-500" />
//       </div>
//       {/* Hero Content */}
//       <h1 className="hero-title text-5xl " style={{ fontFamily: 'Roboto, sans-serif' }}>Hi, I'm Pranabanti Karmaakar</h1>
//       <p className="hero-description text-xl mt-4 max-w-2xl text-base" style={{ fontFamily: 'Inter Tight, serif' }}>
//         Enthusiastic and detail-oriented Front-End Developer with hands-on experience in building web applications.
//         Proficient in modern tools and frameworks with an MSc in Computing from Sheffield Hallam University.
//       </p>
//       <a href="#projects" className="explore-btn mt-8 px-6 py-3 bg-teal-500 rounded-lg text-white hover:bg-teal-400">
//         Explore My Projects
//       </a>
//     </section>
//   );
// };

// export default Hero;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import A from '../assets/cartoonPK.png'; // Import your profile image

const Hero = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, x: -100 }, 
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' });

    gsap.fromTo('.hero-description', 
      { opacity: 0, x: 50 }, 
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power3.out' });

    gsap.fromTo('.explore-btn', 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 0.8, delay: 1, ease: 'back.out(1.7)' });
  }, []);

  return (
    <section className="h-screen bg-gray-900 text-white flex flex-col gap-4 lg:flex-row justify-center items-center text-center lg:text-left px-6 relative">
      {/* Text Content on Left */}
      <div className=" px-20 lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="hero-title text-5xl font-bold mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>Hi, I'm Pranabanti Karmaakar</h1>
        <p className="hero-description text-xl mt-4 max-w-2xl text-base" style={{ fontFamily: 'Inter Tight, serif' }}>
          Enthusiastic and detail-oriented FullStack and AI Developer with hands-on experience in building applications.
          Proficient in modern tools and frameworks with an MSc in Computing from Sheffield Hallam University.
        </p>
        <a href="#projects" className="explore-btn mt-8 px-6 py-3 bg-teal-500 rounded-lg text-white hover:bg-teal-400 transition duration-300">
          Explore My Projects
        </a>
      </div>

      {/* Image on Right */}
      <div className=" px-12 lg:w-1/2 flex justify-center items-center mb-8 lg:mb-20">
        <img src={A} alt="Profile" className="rounded-full w-72 h-72  lg:w-96 lg:h-96  object-cover border-4 border-teal-500" />
      </div>
    </section>
  );
};

export default Hero;
