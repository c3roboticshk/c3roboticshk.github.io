import React from 'react';
import AboutUsItem from '../Components/AboutUsItem';
import '../Styles/AboutUs.css';
import { FounderList } from '../UserData/FounderList';
import { ManagementTeamList } from '../UserData/ManagementTeamList';
import { motion } from 'framer-motion';

import DarwinImage from "../Assets/AboutUs/Darwin.png";
import CICAward1 from "../Assets/Awards/CIC_Award.png"
import CICAward2 from "../Assets/Awards/CIC_Award(2).png"

function AboutUs() {
    return (
        <div>
            <motion.div
                className="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="aboutUsList">
                    <p>Founder and Advisors</p>
                    <p></p>
                    <p></p>

                    <motion.div className="AboutUsListItem"
                        style={{
                            borderRadius: '25px',
                            width: '300px',
                            height: '300px',
                            margin: '10px',
                            padding: '20px',
                            backgroundColor: '#ffffff',
                            boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
                        }}
                        onClick={() => { }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.01, ease: "easeInOut" } }}
                        initial={{ x: 1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 * 0.2 }}
                    >
                        <div style={{
                            backgroundImage: `url(${DarwinImage})`,
                            margin: '10px',
                            borderRadius: '70px',
                            width: '300px',
                            height: '300px'
                        }} className="bgImage">
                        </div>
                        <div className="info">
                            <p className="name" style={{ color: '#000000', }}>{"Prof. Darwin Tat Ming LAU 劉達銘​"}</p>
                            <div className="bottomRow" >
                                <p className="description" style={{ color: '#000000', fontSize: '18px', textAlign: 'center' }}>CUHK Associate Professor, Dept of Mechanical and Automation Engineering</p>
                                <p className="description" style={{ color: '#000000', fontSize: '18px', textAlign: 'center' }}>CUHK Assistant Dean</p>
                            </div>
                        </div>
                    </motion.div>

                    {FounderList.map((project, index) => {
                        return (<AboutUsItem
                            id={index}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                        />);
                    })}
                    <p>Management and Engineering Team</p>
                    <p></p>
                    <p></p>
                    {ManagementTeamList.map((project, index) => {
                        return (<AboutUsItem
                            id={index}
                            name={project.name}
                            image={project.image}
                            date={project.date}
                            description={project.description}
                        />);
                    })}
                    <p></p>
                    <p></p>
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
        </div>
    );
}

export default AboutUs;
