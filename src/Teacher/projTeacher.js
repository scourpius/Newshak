
import {Routes, Route, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { useRef} from 'react';

const projsProf = () => {

    const navigate = useNavigate();
  
    const createProjProf = () => {
      navigate('/createProjProf')
    }
  
    const listItems = myListProj.map((myListProj)=>{   
      return <h5>{myListProj}</h5>;   
  });   
  
    return (
      <div className="projectsToShow">
        <br></br>
        <br></br>
        <br></br>
        <h1>My Projects</h1>
        <button onClick={()=>{createProjProf(); textAlert=""}}>Create New Project</button>
        <br></br>
        <br></br>
     
  
    
      <text> {listItems} </text>
     
  
      </div>
    );
  } 