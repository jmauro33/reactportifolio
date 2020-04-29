import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <Navbar></Navbar> <div class="row">
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
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/jonathanmauro89">Linkedin</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/jmauro33">github</a>
            </li>
          </ul>
      </nav>
    </div> 
    
  );
}

export default App;
