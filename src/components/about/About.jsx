import React from 'react';
import "./about.css";
import Coding from '../../img/Coding.png';


function About() {
  return (
    <div className='a'>
        <div className="a-left">
          <div className="a-bg"></div>
            <div className="a-card bg"></div>
            <div className="a-card img">
              <img src={Coding} alt="loading" className='a-img' />  
            </div>
        </div>
        <div className="a-right">
          <div className="a-about">
            <h1 className="a-title">About me</h1>
            <p className="a-sub">This is Rahul Kannaujia. I have completed BSC(IT) from Mumbai University. Currently i am residing in Mumbai. I have worked in a NGO as a Admin from 2018 to 2022. </p>
            </div>
            <div className="a-education">
            <h2 class="a-title">Education</h2>
            <ul>
                  <li class="a-sub">Graduation from Mumbai University in BSC(IT) stream in 2017.</li>
                  <li class="a-sub">Completed HSC in 2014.</li>
                  <li class="a-sub">Completed SSC in 2012.</li>
              </ul>
              </div>
              <div className="a-skills">
              <h2 class="a-title">Skills</h2>
              <ul>
                <li className='a-sub'>Css</li>
                <li className='a-sub'>Html</li>
                <li className='a-sub'>Javascript</li>
                <li className='a-sub'>React</li>
                <li className='a-sub'>NodeJS</li>
                <li className='a-sub'>Express</li>
                <li className='a-sub'>MongoDB,SQL</li>
                <li className='a-sub'>Bootstrap</li>
              </ul>
              </div>
        </div>
    </div>
  )
}

export default About