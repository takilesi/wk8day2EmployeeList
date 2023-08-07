import React, { useContext, useState } from "react";
import { AppContext } from '../contexts/emp_context'

function Employee(props) {

  let {employees} = useContext(AppContext); 

  return (
    <div className="employee" >

      <h1>Possible Match</h1>
      <div className="employeePic">
        <img style={{width: '100%'}} className="" src={props.match.pic} alt=""/> 
      </div>

      <div>{props.match.name}</div>
      <div>Searching for: {props.match.desiredR}</div>
      <div>Something I Love About You: {props.match.iLoveAboutYou}</div>
      <div>Non-Negotiables: {props.match.nonNegotiable}</div>
      <div>Favorite Activities: {props.match.favActivites}</div>

     


      <div>
        
      </div>
    
      <div className="employeeInfo">
        
      </div>

    </div>
  )
}

export default Employee