import fristProject from "../../assets/hotel.png";
import secondProject from "../../assets/vote.png";
// import thirdProject from "../../assets/portfolio.png";
import thirdProject from "../../assets/amazonclone.png";

import netflixProject from "../../assets/netflix.png";
import { Link } from "react-router-dom";
import Styles from "./Projects.module.css";
import { useState } from "react";
export const projects = [
  // {
  //   img: fristProject,
  //   url: "https://debredamointernationalhotel.com",
  //   name: "Debre Damo Hotel",
  //   stack: ["React", "node.js", "CSS3"],
  //   disc: "This project is a professional hotel website built for Debre Damo International Hotel. The platform provides guests with easy access to information about rooms, services, and amenities, as well as seamless contact options for booking and inquiries. The goal was to create a modern, responsive, and user-friendly experience that reflects the hotel’s brand and makes it accessible to both local and international visitors.",
  // },

  {
    img: fristProject,
    url: "https://debredamointernationalhotel.com",
    name: "Debre Damo",
    stack: ["React", "CSS3"],
    disc: "This project is a professional hotel website built for Debre Damo International Hotel. The platform provides guests with easy access to information about rooms, services, and amenities, as well as seamless contact options for booking and inquiries. The goal was to create a modern, responsive, and user-friendly experience that reflects the hotel’s brand and makes it accessible to both local and international visitors.",
  },
  {
    img: netflixProject,
    url: "https://hailekiros.netlify.app",
    name: "Netflix",
    stack: ["React", "CSS3"],
    disc: "Netflix Clone – React & CSS3:",
  },
    {
    name: "Amazon clone",
    url: "https://amazoncfilaclone.netlify.app",
    img: thirdProject,
    stack: ["React", "node.js", "CSS3","firebase","stripe"],
    disc: "I built a fully functional Amazon clone web application that replicates the core shopping experience, including product browsing, cart management, payment gateway, and a clean, responsive UI. This project demonstrates my full-stack skills, attention to user experience, and ability to recreate a large-scale e-commerce interface from scratch.",
  },
  {
    name: "Deamat voting website",
    url: "https://filmonportfolio.netlify.app",
    img: secondProject,
    stack: ["React", "node.js", "CSS3"],
    disc: "This project is a professional hotel website built for Debre Damo International Hotel. The platform provides guests with easy access to information about rooms, services, and amenities, as well as seamless contact options for booking and inquiries. The goal was to create a modern, responsive, and user-friendly experience that reflects the hotel’s brand and makes it accessible to both local and international visitors.",
  },
];

function Projects() {
  const [expanded, setExpanded] = useState(Array(projects?.length).fill(false));
  // console.log(expanded)
  // Helper to truncate to about 3 lines (e.g., 120 chars)
  const truncate = (text, max = 120) => {
    if (text.length <= max) return text;
    return text.slice(0, max).trim() + "...";
  };

  return (
    <div className={Styles.Portfolio} id="portfolio">
      <h1>My Portfolio</h1>
      <p>Here are some of the projects, I've worked on.</p>
      {projects && (
        <div className={Styles.projects}>
          {projects?.map((project, i) => (
            <div key={i} className={Styles.project}>
              <h1>{project.name}</h1>
              <Link to={project.url} target="_blank">
                <img src={project.img} alt="" />
              </Link>
              <ul className={Styles.stacks}>
                {project.stack.map((stack, j) => (
                  <li key={j} className={Styles.stackItem}>
                    {stack}
                  </li>
                ))}
              </ul>
              <p>{expanded[i] ? project.disc : truncate(project.disc)}</p>
              <p
                className={Styles.view}
                onClick={() => {
                  setExpanded((exp) => {
                    const copy = [...exp];
                    copy[i] = !copy[i];
                    return copy;
                  });
                }}
              >
                {expanded[i] ? "View less" : "View more"}
              </p>
              <div className={Styles.buttons}>
                <Link to={project.url} target="_blank">
                  <button>Live Demo</button>
                </Link>
                <Link>
                  <button>Code</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
