import React from 'react';
import {
  Link
} from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div className="row"></div>
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p>Jonathan Mauro</p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to ="/about">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">portfolio</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.linkedin.com/in/jonathanmauro89">Linkedin</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/jmauro33">github</a>
                </li>
              </ul>
            </div>
      </nav>
    </div> 
     </div>  
  );
}

export default Navbar;