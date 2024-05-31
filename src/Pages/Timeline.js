import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineList } from "../UserData/TimelineList";
import "../Styles/Timeline.css";

function Timeline() {
  let timelineList = TimelineList.map((exp) => (
    <VerticalTimelineElement
      className={exp.nature}
      date={exp.date}
      dateClassName={"vertical-timeline-element--date"}
      contentStyle={{
        background: '#d8cd80', color: '#1c2135'
      }}
      contentArrowStyle={{ borderRight: '10px solid  #d8cd80' }}
      iconStyle={{ background: '#1c2135', color: '#eff', }}
      icon={exp.icon}
    >
      <div className="vertical-timeline-element--organization">

        <h3> {exp.timelineName}</h3>

      </div>
      <div className="vertical-timeline-element--introduction">
        <h4> {exp.introduction}</h4>
      </div>
      <div>
        {exp.photos.map((photo) => {
          return (<img src={photo} style={{ maxWidth: '60%' }} />);
        })}
      </div>
    </VerticalTimelineElement >
  ));

  return (
    <div>
      <VerticalTimeline lineColor="#8794c0">
        {timelineList}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;