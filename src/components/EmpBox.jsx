import React, { useContext, useState } from "react";
import { AppContext } from '../contexts/emp_context'

import Search from './Search'
import EmpList from './EmpList'

function EmpBox(props) {

  // let {employees} = useContext(AppContext);

  // console.log(employees); 
  
  return (
    <div>  
      <h1>List of Possible Matches</h1>
      <Search/>


      <div className="empBox">
        <EmpList setMatch={props.setMatch}/>
      </div>
    </div>
  )
}

export default EmpBox
