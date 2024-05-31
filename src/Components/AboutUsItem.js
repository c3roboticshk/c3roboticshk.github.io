import React from "react";
import { motion } from "framer-motion";

function AboutUsItem({ image, name, id, description }) {

    return (
        <motion.div className="AboutUsListItem"
            onClick={() => { }}
            // while Hover scale up, transition duration 0.5s, ease-in-out
            whileHover={{ scale: 1.05, transition: { duration: 0.01, ease: "easeInOut" } }}
            initial={{ x: 1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: id * 0.2 }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage">
            </div>
            <div className="info">
                <p className="name" style={{ color: '#000000', }}>{name}</p>
                <div className="bottomRow" >
                    {description.map((line) => {
                        return (<p className="description" style={{ color: '#000000', fontSize: '18px', textAlign: 'center' }}>{line}</p>)
                    })}

                </div>
            </div>
        </motion.div>
    );
}

export default AboutUsItem;