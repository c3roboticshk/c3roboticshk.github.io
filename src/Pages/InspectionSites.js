import React from 'react';
import InspectionSitesItem from '../Components/InspectionSitesItem';
import '../Styles/Projects.css';
import { ProjectList } from '../UserData/ProjectList';
import { motion } from 'framer-motion';

function InspectionSites() {
    return (
        <motion.div
            className="projects">
            <div className="projectsHeader">
                <h1>Inspected Sites</h1>
            </div>
            <div className="projectList">
                {ProjectList.map((project, index) => {
                    return (<InspectionSitesItem
                        id={index}
                        name={project.name}
                        image={project.image}
                        date={project.date}
                    />);
                })}
            </div>
        </motion.div>
    );
}

export default InspectionSites;
