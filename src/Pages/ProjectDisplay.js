import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../UserData/ProjectList";
import reactMarkdown from "react-markdown";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../Styles/ProjectDisplay.css";
import "../Styles/Markdown.css";
import { motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import LoadMD from "../Helpers/LoadMD";
import ShowMoreIcon from "@material-ui/icons/ArrowDropDownRounded"
import ShowLessIcon from "@material-ui/icons/ArrowDropUpRounded"


function ProjectDisplay() {

    const { name } = useParams();
    const id = ProjectList.findIndex((project) => project.name.replace(/\s/g, '_') === name);

    const project = ProjectList[id];
    const projectLink = ProjectList[id].link;

    const [buttonClick, setButtonClick] = React.useState(false);

    return (
        <motion.div
            className="project"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="heading">
                <h1> {project.name} </h1>
                <p> {project.date} </p>
                <img src={project.image} />
            </div>
            <div className="description">
                <p>
                    {project.description}
                </p>
            </div>
            <div className="details">
                {project.details != null &&
                    <h2>Project Details</h2>
                }
                <p>{project.details}</p>
            </div>
            {project.markdown != null &&
                <motion.div
                    className="markdownBox"
                    initial={buttonClick ? { opacity: 0, display: "none" } : { opacity: 1, display: "flex" }}
                    animate={{ opacity: buttonClick ? 1 : 0, display: buttonClick ? "flex" : "invisible" }}
                    exit={{ opacity: 0, display: "none" }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => {
                        // set display to none
                        if (buttonClick === false) {
                            document.querySelector(".markdownBox").style.display = "none";
                        }
                    }}
                >
                    <ReactMarkdown className="markdown" children={LoadMD(ProjectList[id].markdown)} />
                </motion.div>
            }

            {project.markdown != null &&
                <button className="showButton"
                    onClick={() => {
                        setButtonClick(!buttonClick);
                    }}
                >
                    {buttonClick ? <ShowLessIcon /> : <ShowMoreIcon />}
                    {buttonClick ? "Show Less" : "Show More"}
                </button>
            }

            <div className="photos">
                {ProjectList[id].photos != null &&
                    <h2>Snapshots</h2>
                }
                {ProjectList[id].photos != null && ProjectList[id].photos.map((photo) => {
                    return (<img src={photo} />);
                })}
            </div>

        </motion.div>
    );
}

export default ProjectDisplay;
