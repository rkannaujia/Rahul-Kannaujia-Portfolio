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
          I have used  new technologies to build these projects. Responsive for Mobile and Desktop different designs. 
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