import React from "react";
import Link from "@material-ui/core/Link";
import YoutubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GmailIcon from "@material-ui/icons/Mail";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link href="https://www.youtube.com/@cuhkc3roboticslaboratory443/" target="_blank" rel="noopener noreferrer"> <YoutubeIcon /> </Link>
        <Link href="https://www.linkedin.com/company/c3-construction-robotics-limited/" target="_blank" rel="noopener noreferrer"> <LinkedInIcon /> </Link>
        <Link href={`mailto:${"info@c3robotics.com.hk"}?subject=${encodeURIComponent("") || ''}&body=${encodeURIComponent("body") || ''}`} target="_blank" rel="noopener noreferrer"> <GmailIcon /> </Link>
      </div>
      <p> Contact: info@c3robotics.com.hk | Location: Hong Kong</p>
      <p> &copy; 2023 C3 Construction Robotics Limited</p>
    </div>
  );
}

export default Footer;