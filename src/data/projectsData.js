// src/data/projectsData.js
import A from '../assets/_reelranker_18531949.apk';
import B from '../assets/_SpaceTrace_18532010.apk';



export const projects = [
  {
    id: 1,
    title: 'Interior Design-Built Estimation App',
    description: `A web app integrating machine learning for personalized service recommendations.`,
    details: `Built in collaboration with The Abode, this app streamlines planning and budgeting for homeowners using a content-based recommendation system. The recommendation system is powered by a machine learning model built with the scikit-learn Python library. It uses TD-IDF vectorization and Logistic Regression for accurate service recommendations. Performance metrics like accuracy, relevance, and precision were measured to evaluate the model's effectiveness.`,
    techStack: ['ReactJS', 'Express.js', 'Flask', 'PostgreSQL', 'Scikit-learn'],
    link: 'https://github.com/PranabantiKarmaakar99/Dissertaion/tree/master',
    live: 'https://dissertation-nine.vercel.app/',
  },
    {
      id: 2,
      title: 'SuperTram App',
      description: `A tram tracking and booking app featuring route visualization using OpenStreet Maps.`,
      details: `This app allows users to track trams in Sheffield, book tickets, and access community updates. Features include an ASP.NET backend and a ReactJS frontend with mobile-responsive UI.`,
      techStack: ['ReactJS', 'ASP.NET MVC', 'OpenStreet Maps'],
      link: 'https://github.com/PranabantiKarmaakar99/SuperTramApp_MVC/tree/master',
    },
    {
      id: 3,
      title: 'Paytm Money Transfer App',
      description: `A secure money transfer application with features like transaction history and user search.`,
      details: `Enables users to transfer money, view transaction history, and manage accounts securely. Built with a Node.js backend and a ReactJS frontend.`,
      techStack: ['Node.js', 'Express', 'ReactJS', 'TypeScript'],
      link: 'https://github.com/PranabantiKarmaakar99/merchantapp_paytm_typescript',
    },
    {
      id: 4,
      title: 'SpaceTrace',
      description: `A ReactJS-based app displaying asteroid-related data using ChartJS and NASA API.`,
      details: `Displays real-time asteroid data using interactive visualizations. Features include pie charts and line charts for data analysis.`,
      techStack: ['ReactJS', 'ChartJS', 'NASA API'],
      link: 'https://github.com/PranabantiKarmaakar99/SpaceTrace',
      live: 'https://spacetrace.netlify.app/',
      mobile:{A}
    },
    {
      id: 5,
      title: 'ReelRanker',
      description: `Fetches and ranks movies and TV shows using an IMDB-like API.`,
      details: `Developed a responsive ReactJS application to fetch, rank, and display movies and TV shows.`,
      techStack: ['ReactJS', 'IMDB API'],
      link: 'https://github.com/PranabantiKarmaakar99/ReelRanker',
      live: 'https://reelranker.netlify.app/',
      mobile:{B}
      
    },
    {
      id: 6,
      title: 'Portfolio',
      description: `A personal portfolio website showcasing my projects, skills, and experience.`,
      details: `This portfolio website is built using ReactJS, GSAP for animations, and Tailwind CSS for styling. It features smooth animations, a responsive design, and sections for my projects and skills.`,
      techStack: ['ReactJS', 'GSAP', 'Tailwind CSS'],
      link: 'https://github.com/PranabantiKarmaakar99/portfolio',
      live: 'https://your-portfolio-link.com/', // Replace with actual live link
    },
  ];
  