// import React from 'react';
// import { useParams } from 'react-router-dom';
// import projectsData from './Projects';
// import '../Styles/projectDetails.css';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projectsData.find((project) => project.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="project-details">
//       <h2>{project.title}</h2>
//       <p>{project.description}</p>

//       {project.images.map((image, index) => (
//         <img src={image} alt={`${project.title} ${index}`} key={index} />
//       ))}
//       <img src={project.coverImage} alt={project.title} />
//     </div>
//   );
// };

// export default ProjectDetails;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import projectsData from './Projects';
// import '../Styles/projectDetails.css';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const project = projectsData.find((project) => project.id === parseInt(id));

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div className="project-details">
//       <div className="position-cont">
//         <div className="test">
//           <h2>{project.title}</h2>
//           <p>{project.description}</p>
//         </div>
//         {project.images.map((image, index) => (
//           <div className="project-box" key={index}>
//             <img src={image} loading="lazy" alt={`${project.title} ${index}`} />
//           </div>
//         ))}
//         <div className="video-container" key={project.id}>
//           <video controls autoplay loop muted>
//             <source src={project.videoUrl} type="video/mp4" />
//           </video>
//         </div>

//         {/* <img src={project.coverImage} alt={project.title} /> */}
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from './Projects';
import '../Styles/projectDetails.css';
import videoaguita from '../img/slider/videoaguita.mp4';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <div className="position-cont">
        <div className="test">
          <h2 className="project-title-details">{project.title}</h2>
          <p className='project-details'>{project.description}</p>
        </div>
        {project.images.map((image, index) => (
          <div className="project-box" key={index}>
            <img src={image} loading="lazy" alt={`${project.title} ${index}`} />
          </div>
        ))}
        {project.videoUrls &&
          project.videoUrls.map((url, index) => (
            <video controls loop muted className="video" key={index}>
              <source src={url} type="video/mp4" />
            </video>
          ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
