import React from "react";
import { motion } from "framer-motion";

function AboutUsItem({ image, name, id, description }) {

    return (
        <motion.div className="AboutUsListItem">
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
            </div>
            <div className="info">
                <p className="name" style={{ color: '#000000', }}>{name}</p>
                <br />
                <div className="bottomRow" >
                    {description.map((line) => {
                        return (<p className="description" >{line}</p>)
                    })}

                </div>
            </div>
        </motion.div>
    );
}

export default AboutUsItem;