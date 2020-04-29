import React from "react"
import Card  from "./cards"
function Projects(props) {
    return (
        
       <div>
      <  div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4"></div>
     
       <Card title = "Lost-Pet" description = "Group Project implementing Node.js, Express as well as an SQL database to track missing pets plus front end" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "Fitness-Tracker" description = "Fitness app to track fitness workouts implementing Mongo-DB " link = "https://jonathanfitnesstracker.herokuapp.com/?id=5e9736d3dcba090017a5f3ee"/>
       <div class="col mb-4"></div>
       <Card title = "" description = "description" link = ""/>
       <div class="col mb-4"></div>
       <Card title = "project" description = "description" link = ""/>
          </div>
        </div>             
          
  
                    
  );
}


export default Projects;