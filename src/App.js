import './App.css';

import { useState, useEffect } from 'react';

import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cases from './pages/Cases';
import AboutUs from './pages/AboutUs';

import RoboTapper from './pages/RoboTapper';
import RoboPainter from "./pages/RoboPainter";

function App() {
    const [currPage, setCurrPage] = useState('Home');

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [currPage]);

    return (
        <div className="App">
            <TopBar setCurrPage={setCurrPage}/>

            {currPage === 'Home' ? <Home/> : null}
            {currPage === 'Products' ? <Products setCurrPage={setCurrPage}/> : null}
            {currPage === 'Our Cases' ? <Cases /> : null}
            {currPage === 'About Us' ? <AboutUs /> : null}
            {currPage === 'RoboTapper' ? <RoboTapper setCurrPage={setCurrPage}/> : null}
            {currPage === 'RoboPainter' ? <RoboPainter/> : null}

            <Footer />
        </div>
    );
}

export default App;
