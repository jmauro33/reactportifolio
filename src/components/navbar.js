import React from 'react';
import {
  Link
} from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div class="row"></div>
        <div class="col-6">

        </div>

        <div class="col-6">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="index.html">Jonathan Mauro</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to ="/about">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/projects">portfolio</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://www.linkedin.com/in/jonathanmauro89">Linkedin</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="https://github.com/jmauro33">github</a>
                </li>
              </ul>
            </div>
      </nav>
    </div> 
     </div>  
  );
}

export default Navbar;