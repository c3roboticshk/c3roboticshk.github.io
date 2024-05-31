import "../Styles/Contact.css";
import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "@material-ui/icons/Mail";

import { PhoneEnabled } from "@material-ui/icons";


function Contact() {
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className="info">
                <div className="left">
                    <div className="contactInfo">
                        <a href="https://www.linkedin.com/company/c3-construction-robotics-limited/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                            <div className="contactInfoText">
                                <h3>LinkedIn</h3>
                                <p>https://www.linkedin.com/company/c3-construction-robotics-limited/</p>
                            </div>
                        </a>
                    </div>
                    <div className="contactInfo">
                        <a href={`mailto:${"info@c3robotics.com.hk"}?subject=${encodeURIComponent("") || ''}&body=${encodeURIComponent("body") || ''}`} target="_blank" rel="noopener noreferrer">
                            <GmailIcon />
                            <div className="contactInfoText">
                                <h3>Mail</h3>
                                <p>info@c3robotics.com.hk</p>
                            </div>
                        </a>
                    </div>
                    <div className="contactInfo">
                        <a href={`phoneto:${"+852 63111920"}`}>
                            <PhoneEnabled />
                            <div className="contactInfoText">
                                <h3>Phone</h3>
                                <p>6311 1920</p>
                            </div>
                        </a>
                    </div>

                </div>
                <div className="right">

                </div>
            </div>
        </div>
    );
}
export default Contact;