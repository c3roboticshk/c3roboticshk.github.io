import React from "react";
import { motion } from "framer-motion";
import TickIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import { ProjectList } from "../UserData/ProjectList";

function InspectionSitesItem({ image, name, id, date, description }) {
    const [isHover, setIsHover] = React.useState(false);

    return (
        <motion.div className="InspectionSitesItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
                <span>
                    {description}
                    {ProjectList[id].hasReadme && <div><p>Readme file <TickIcon /></p></div>}
                </span>
            </div>
            <div className="info">
                <p className="name">{name}</p>
                <div className="bottomRow">
                    <p className="date">{date}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default InspectionSitesItem;