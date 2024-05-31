import React from "react";
import "../Styles/DarkMode.css";
import Switch from "react-switch";
import LightIcon from "@material-ui/icons/WbSunnyOutlined";
import DarkIcon from "@material-ui/icons/Brightness2";

const DarkMode = () => {

    const [currentMode, setCurrentMode] = React.useState("dark");
    
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        setCurrentMode("dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        setCurrentMode("light");
    };

    const toggleTheme = () => {
        (currentMode === "dark") ? setLightMode() :  setDarkMode();
    };
    return (
        <div className='dark_mode'>
            <Switch
                className='darkModeSwitch'
                checked={currentMode === "dark"}
                onChange={toggleTheme} 
                offColor="#1c2135" 
                onColor="#e7e9ee"
                offHandleColor="#d8cd80"
                onHandleColor="#d8cd80"
                handleDiameter={30}
                checkedIcon={false}
                uncheckedIcon={false}
                uncheckedHandleIcon={
                    <div className="lightModeIcon"><LightIcon /></div>
                }
                checkedHandleIcon={
                    <div className="darkModeIcon"><DarkIcon /></div>
                }
                height={20}
                width={50}
            />
        </div>
    );
};

export default DarkMode;

/*

import { ReactComponent as Sun } from "../Assets/Sun.svg";
import { ReactComponent as Moon } from "../Assets/Moon.svg";

const DarkMode = () => {
    
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setLightMode();
        else setDarkMode();
    };
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
*/
