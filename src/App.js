import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from './Components/ScrollToTop';
import AnimatedRoutes from './Components/AnimatedRoutes';


export const ThemeContext = React.createContext(null);

function App() {

  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <Router>
        <ScrollToTop />
          <Navbar />
            <AnimatedRoutes/>
          <Footer />
      </Router>
    </div>
    </ThemeContext.Provider>
    );
}
export default App;