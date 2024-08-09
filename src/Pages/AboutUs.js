import React from 'react';
import AboutUsItem from '../Components/AboutUsItem';
import '../Styles/AboutUs.css';
import { FounderList } from '../UserData/FounderList';
import { ManagementTeamList } from '../UserData/ManagementTeamList';
import { motion } from 'framer-motion';

import CICAward1 from "../Assets/Awards/CIC_Award.png"
import CICAward2 from "../Assets/Awards/CIC_Award(2).png"

function AboutUs() {
    return (
        <div className='aboutUsPage'>
            <p style={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: '40px' }}>Founders and Advisors</p>
            <motion.div className="projects">
                <div className="aboutUsList">
                    {FounderList.map((project, index) => {
                        return (<AboutUsItem
                            id={index}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                        />);
                    })}
                </div>
                <p style={{ display: 'flex', justifyContent: 'center', color: 'white', fontSize: '40px' }}>Management Team</p>
                <div className="aboutUsList">
                    {ManagementTeamList.map((project, index) => {
                        return (<AboutUsItem
                            id={index}
                            name={project.name}
                            image={project.image}
                            date={project.date}
                            description={project.description}
                        />);
                    })}
                </div>

            </motion.div >

            <hr class="roundedDivLine" />

            <div className='AwardList'>
                <h2 style={{
                    fontSize: '36px'
                }}> Awards </h2>
                <p>Gold Medal, 13th International Invention Fair in the Middle East (IIFME)</p>
                <p>Young Innovator Award, 2022 Hong Kong Construction Industry Council (CIC) Construction Innovation Award</p>
                <p>Silver Medal, 2022 International Exhibition of Inventions of Geneva</p>
                <div className='AwardGallary'>
                    <img src={CICAward1} />
                    <img src={CICAward2} />
                </div>

            </div>
        </div >
    );
}

export default AboutUs;
