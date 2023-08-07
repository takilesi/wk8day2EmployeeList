import React, { useContext, useState } from "react";
import { AppContext } from '../contexts/emp_context'

import EachEmp from './EachEmp'

function EmpList(props) {

  let {employees} = useContext(AppContext); 

  return (
    <div className="empList">
        {employees.map((theEmp, index)=>{
          return <EachEmp setMatch={props.setMatch} theEmp={theEmp} key={index}/>
        })}
    </div>
  )
}

export default EmpList