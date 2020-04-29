import React from "react"
import Card  from "./cards"
function Projects(props) {
    return (
        
    <div>
      <  div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4"></div>
       <Card title = "Lost-Pet" description = "Group Project implementing Node.js, Express as well as an SQL database to track missing pets" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "Fitness-Tracker" description = "Fitness app to track fitness workouts implementing Mongo-DB " link = "https://jonathanfitnesstracker.herokuapp.com/?id=5e9736d3dcba090017a5f3ee"/>
       <div class="col mb-4"></div>
       <Card title = "Employee-Searcher" description = "Used React Mongo DB and API routes to creat an employee search app" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "Budget-Tracker" description = "Budget tracker app using Webpacks and mongoDB" link = ""/>
          </div>

          <  div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4"></div>
       <Card title = "Note-Taker" description = "Note taking app using Node and express routes" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "Drinky-Links" description = "Group Project using HTML, CSS, JS and APIs to creat a drink recipie app" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "Book Reviwer" description = "Upcoming Book Reviewing app assignment that will implement React, Express, Mongo and Node" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "Final project" description = "Upcoming Final Project will be a project using everything that I learned throughout the past several months" link = ""/>
          </div>
      </div>             
          
  );
}


export default Projects;