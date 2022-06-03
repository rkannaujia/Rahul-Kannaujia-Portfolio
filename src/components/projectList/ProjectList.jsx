import "./projectList.css";
import React from 'react';
import Project from "../project/Project";
import {projects} from "../../data";


function ProjectList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">
          Rahul is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item)=>( 
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
        
      </div>
    </div>
  )
}

export default ProjectList