
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Reorder";

import "../Styles/Navbar.css";
import DarkMode from "./DarkMode";
import GoBack from "./GoBack";

import c3logo from "../Assets/c3-logo.svg";

export default function Navbar() {

    // Handle menu button
    const [expandNavbar, setExpandNavbar] = React.useState(false);
    const location = useLocation();
    React.useEffect(() => {
        setExpandNavbar(false);
    }, [location]);
    // navigate to current home page using use Navigate
    const navigate = useNavigate();
    const goToContact = () => {
        if (location.pathname === "/") {
            setExpandNavbar(false);
            setTimeout(() => {
                const element = document.getElementById("contact");
                window.scrollTo({
                    top: element.offsetTop - 50,
                    left: 0,
                    behavior: "smooth",
                });
            },
                500);
        }
        else {
            navigate("/");
            // wait 1s and scroll to contact
            setTimeout(() => {
                const element = document.getElementById("contact");
                window.scrollTo({
                    top: element.offsetTop + 200,
                    left: 0,
                    behavior: "smooth",
                });
            },
                1000);
        }
    };

    const goToHome = () => {
        navigate("/");
        // wait 0.1s and scroll smoothly to top
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        },
            100);
    };



    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="left">
                <GoBack />
                <img src={c3logo} alt="c3logo" />
            </div>
            <div className="middle">
                <div className="link">
                    <button onClick={goToHome}> Home </button>
                </div>

                <div className="link">
                    <Link to={"/timeline"}>Roadmap </Link>
                </div>
                <div className="link">
                    <Link to={"/inspectionSites"}>Projects </Link>
                </div>
                <div className="link">
                    <Link to={"/aboutUs"}> About us </Link>
                </div>
                <div className="link">
                    <button onClick={goToContact}> Contact </button>
                </div>

            </div>
            <div className="right">
                <DarkMode />
                <div className="dropdownButton">
                    <button
                        onClick={() => {
                            setExpandNavbar((prev) => !prev);
                        }}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>

        </div>
    );
}
