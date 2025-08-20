import './App.css';

import { useState, useEffect, useRef } from 'react';

import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cases from './pages/Cases';
import AboutUs from './pages/AboutUs';

import RoBosunTapper from './pages/RoBosunTapper';
import RoBosunPainter from './pages/RoBosunPainter';

function App() {
    const [currPage, setCurrPage] = useState('Home');

    const topBarRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [currPage]);

    return (
        <div className="App">
            <TopBar setCurrPage={setCurrPage} topBarRef={topBarRef}/>

            {currPage === 'Home' ? <Home topBarRef={topBarRef}/> : null}
            {currPage === 'Products' ? <Products setCurrPage={setCurrPage}/> : null}
            {currPage === 'Our Cases' ? <Cases /> : null}
            {currPage === 'About Us' ? <AboutUs /> : null}
            {currPage === 'RoBosun-Tapper' ? <RoBosunTapper setCurrPage={setCurrPage}/> : null}
            {currPage === 'RoBosun-Painter' ? <RoBosunPainter/> : null}

            <Footer />
        </div>
    );
}

export default App;
