import React from 'react';
import InspectionSitesItem from '../Components/InspectionSitesItem';
import '../Styles/Projects.css';
import { ProjectList } from '../UserData/ProjectList';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projectsHeader">
        <h1>Projects</h1>
      </div>
      <div className="projectList">
        {ProjectList.map((project, index) => {
          return (<InspectionSitesItem
            id={index}
            name={project.name}
            image={project.image}
            date={project.date}
            description={project.description}
          />);
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
