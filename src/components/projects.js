import React from "react"
import Card  from "./cards"
function Projects(props) {
    return (
        
    <div className="topcontainer">
      <div className="card-deck">
      <Card title = "Lost-Pet" description = "Group Project implementing Node.js, Express as well as an SQL database to track missing pets" link = ""/>
      <Card title = "Fitness-Tracker" description = "Fitness app to track fitness workouts implementing Mongo-DB " link = "https://jonathanfitnesstracker.herokuapp.com/?id=5e9736d3dcba090017a5f3ee"/>
      </div>
      <br></br>
      <div className="card-deck">
      <Card title = "Budget-Tracker" description = "Budget tracker app using Webpacks and mongoDB" link = " https://jonathan-budget-tracker.herokuapp.com/"/>
      <Card title = "Note-Taker" description = "Note taking app using Node and express routes" link = " https://jmauronotes.herokuapp.com/"/>
      </div>
      <br></br>
      <div className="card-deck">
      <Card title = "Book Reviwer" description = "Upcoming Book Reviewing app assignment that will implement React, Express, Mongo and Node" link = "https://bookreviers.herokuapp.com/"/>  
      <Card title = "Final project" description = "Upcoming Final Project will be a project using everything that I learned throughout the past several months" link = "https://jonathanfinalproject.herokuapp.com/"/>
      </div>
    </div>             
          
  );
}


export default Projects;