// import React from 'react';
// import projectsData from './Projects';
// import ProjectDetails from './ProjectDetails';
// import { Link } from "react-router-dom";

// const Work = () => {

//   return (
//     <div id="work" className="project-grid">
//       {projectsData.map((project) => (
//          <Link to={`/project/${project.id}`} key={project.id}>
//          <div className="project-item">
//            <img src={project.coverImage} alt={project.title} />
//          </div>
//        </Link>
//       ))}
//     </div>
//   );
// };

// export default Work;

import React from 'react';
import { Link } from 'react-router-dom';
import projectsData from './Projects';
import '../Styles/work.css';

const Work = () => {
  return (
    <>
      <h2 className="work-title">Work</h2>
      <div id="work" className="project-grid">
        {projectsData.map((project) => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <div className="project-item">
              <img
                src={project.coverImage}
                alt={project.title}
                loading="lazy"
              />
              <span className="project-title">{project.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Work;
