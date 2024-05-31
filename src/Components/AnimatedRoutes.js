import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Timeline from "../Pages/Timeline";
import ProjectDisplay from '../Pages/ProjectDisplay';
import { AnimatePresence } from "framer-motion";
import InspectionSites from "../Pages/InspectionSites";
import AboutUs from "../Pages/AboutUs";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:name" element={<ProjectDisplay />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/inspectionSites" element={<InspectionSites />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>

  );
}

export default AnimatedRoutes;