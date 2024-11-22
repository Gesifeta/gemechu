import React from "react";
import { v4 as uuidv4 } from "uuid";

import Cards from "./Card";
import { images } from "@/public";

const Projects = () => {
  const projects = [
    {
      id: uuidv4(),
      title: "E-commerce Project",
      description:
        "This project is a comprehensive e-commerce web application developed using the MERN stack (MongoDB, Express, React, Node.js) with responsive front end. The application is built to provide features such as product listings, a shopping cart, user authentication, and checkout functionality. The deployment leverages AWS ECS (Elastic Container Service) and Fargate for a scalable and containerized cloud solution.",
      image: images.yemezo,
      projectlink: "https://yemez.netlify.app/",
      stacks: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "React",
        "Mongodb",
        "Nodejs",
        "Redux",
        "express",
        "Graphql",
      ],
    },
    {
      id: uuidv4(),
      title: "Photo Gallery",
      description:
        "This project is a photo gallery web application built using the MERN stack HTML,CSS,Javascript, and React with with Content Mangement Systems- Sanity. The application allows users to upload, view,comment,like and manage their photo collections, offering a sleek and responsive user interface with robust backend support for data handling. Here's an overview of the technologies used:",
      image: images.mormor,
      projectlink: "https://mormorgallery.netlify.app/",
      stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "Sanity"],
    },
    {
      id: uuidv4(),
      title: "Minibanking Project",
      description:
        "This project is a mini-banking application built using the MERN stack (MongoDB, Express, React, Node.js) and styled with Material UI. It provides basic banking features such as user authentication, account creation, deposits, withdrawals, and balance inquiries. Here is a breakdown of the lbg technologies used and their roles:",
      image: images.banking,
      projectlink: "https://myminibanking.netlify.app",
      stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "Material UI", "Redux"],
    },
    {
      id: uuidv4(),
      title: "Portfolio",
      description: `This project is a personal portfolio website developed using React for building a dynamic front end, with Sanity as a content management system (CMS). It showcases my skills, projects, and experience, with responsive styling achieved using HTML, CSS, and JavaScript. Here's a breakdown of the technologies used:`,
      image: images.portfolio,
      projectlink: "https://www.gemechuadam.com/",
      stacks: ["HTML", "CSS", "React", "JAVASCRIPT", "Sanit", "Netlify"],
    },
    {
      id: uuidv4(),
      title: "Health Booking System",
      description: `This project is a user-friendly frontend application for a health booking system, allowing users to easily schedule appointments with healthcare providers. The application leverages a clean and responsive design, ensuring an intuitive user experience.`,
      image: images.health,
      projectlink: "https://www.gemechuadam.com/",
      stacks: ["HTML", "CSS", "React","Express","Mongodb","JWT", "JAVASCRIPT"],
    },

    {
      id: uuidv4(),
      title: "E-Plant Shopping",
      description: `This project a simple e-commerce front end for an online plant shop, developed using React for a dynamic user interface, along with CSS, HTML, and JavaScript for styling, layout, and interactivity. The application provides a smooth shopping experience with features such as browsing plants, adding items to a cart, and viewing product details.`,
      image: images.plantshopping,
      projectlink: "https://gesifeta.github.io/e-plantShopping/",
      stacks: ["HTML", "CSS", "JAVASCRIPT", "React", "React Redux Toolkit"],
    },
    {
      id: uuidv4(),
      title: "Yelp.com Pixel-Perfect Clone",
      description: `This project is a pixel-perfect clone of the Yelp.com front end, created using HTML, CSS, and JavaScript. The objective is to replicate Yelp’s complex,responsive layout and interactive features, focusing on meticulous detail to match the original design as closely as possible.`,
      image: images.yelp,
      projectlink: "https://yelp-pixel-perfect-clone.netlify.app",
      stacks: ["HTML", "CSS", "JAVASCRIPT"],
    },
    {
      id: uuidv4(),
      title: "Country information",
      description:
        "  The app provides users with detailed information about various countries alongwith neighbors, including geographical data and location mapping. It integrates with a country API and Google Maps to deliver a comprehensive and interactive experience.",
      image: images.country,
      projectlink: "https://gemechulocationsapp.netlify.app/",
      stacks: [
        "HTML",
        "CSS",
        "Typescript",
        "React",
        "PUBLIC API",
        "JAVASCRIPT",
      ],
    },
  ];
  return (
    <div className="projects-container">
      <h2>Latest projects and works</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Cards
            title={project.title}
            description={project.description}
            image={project.image}
            stacks={project.stacks}
            key={`${project.title}-${project.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
