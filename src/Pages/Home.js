import React from 'react';


import "../Styles/Home.css";
import { motion } from "framer-motion";
import Contact from '../Components/Contact';

//import Robo from "../Assets/Product/RoboTapper1.0.jpg"
import Robo from "../Assets/Product/RoboTapping.jpg"
import TopView from "../Assets/Product/topView.jpg"
import AnalysisGraph from "../Assets/Product/Analysis.jpg"

function Home() {
  return (
    <div>
      <img src={TopView} style={{ maxHeight: '600px', width: '100%', opacity: '20%' }} />

      <div className="introduction">
        <div className="prompt">
          {/*  */}
          <div className="promptDiscription" >
            <h2 style={{
              alignItems: 'right',
              fontFamily: '"Helvetica", Tahoma, Geneva, Verdana, sans-serif',
              fontSize: '36px',
              color: '#ADA78A',
              textShadow: '1px 1px 1px #000000',
            }}>Robo Tapping</h2>
            <p style={{
              fontSize: '24px',
              color: 'var(--body_color)',
            }}>
              Innovative solution designed to address the challenges faced during wall defect investigations in high-rise buildings.
            </p>
          </div>

          <div className='box'>
            <img src={Robo} />
          </div>

          {/*  */}

          <img src={AnalysisGraph} style={{ maxHeight: '100%' }} />

          <div className="promptDiscription" >
            <h2 style={{
              alignItems: 'right',
              fontFamily: '"Helvetica", Tahoma, Geneva, Verdana, sans-serif',
              fontSize: '36px',
              color: '#ADA78A',
              textShadow: '1px 1px 1px #000000',
            }}>Artificial Intelligence Analysing</h2>
            <p style={{
              fontSize: '24px',
              color: 'var(--body_color)',
            }}>
              Analyse inspection result using Artificial Intelligence (AI), automatically generate the report of inspection result
            </p>
          </div>


        </div>
      </div>

      <hr class="roundedDivLine" />

      <div className="contact">
        <Contact />
      </div>
    </div >
  );
}

export default Home;