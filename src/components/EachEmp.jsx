import React, { useContext, useState } from "react";
import { AppContext } from '../contexts/emp_context'


function EachEmp(props) {

  
  // let { employees, employee } = useContext(AppContext)
  // console.log(employee); 

  return (
    <div className="eachEmp">

      <div className="eachEmpPic">
          <img style={{width: '100%'}} className="" src={props.theEmp.pic} alt=""/> 
      </div>

      <div className="eachEmpName">
        {/* <p>{props.theEmp.name}</p> */}
          <button className="heartsButtons" onClick={()=>props.setMatch(props.theEmp)} >{props.theEmp.name}</button>
        
      </div>



  
            
    </div>  
  )
}

export default EachEmp

// img: require('./pauljones.jpg'),