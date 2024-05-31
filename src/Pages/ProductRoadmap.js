import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ExperienceList } from "../UserData/ExperienceList";
import "../Styles/Timeline.css";
import { Description } from '@material-ui/icons';
import { motion } from 'framer-motion';

function ProductRoadmap() {
    let experienceList = ExperienceList.map((exp) => (
        <VerticalTimelineElement
            className={exp.nature}
            date={exp.date}
            dateClassName={"vertical-timeline-element--date"}
            contentStyle={{
                background: '#d8cd80', color: '#1c2135'
            }}
            contentArrowStyle={{ borderRight: '10px solid  #d8cd80' }}
            iconStyle={{ background: '#1c2135', color: '#eff' }}
            icon={exp.icon}
        >
            <div className="vertical-timeline-element--organization">
                <a href={exp.orgLink} target="_blank" rel="noopener noreferrer">
                    <h3> {exp.timelineName}</h3>
                </a>
            </div>
            <div className="vertical-timeline-element--position">
                <h4> {exp.position}</h4>
            </div>
            <div>
                {exp.descriptions.map((description) => {
                    return (<p> {description} </p>);
                })}
            </div>
        </VerticalTimelineElement>

    ));

    return (
        <div>
            <VerticalTimeline lineColor="#8794c0">
                {experienceList}
            </VerticalTimeline>
        </div>
    )
}

export default ProductRoadmap;