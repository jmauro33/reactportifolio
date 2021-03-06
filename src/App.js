import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import './App.css';
import "./index.css";
function App() {
  return (
  
    
    <Router>
       <Navbar/>     
         <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
              </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        <Footer/>
      </Router>
    
  );
}

export default App;
