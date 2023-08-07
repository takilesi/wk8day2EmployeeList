import React, { createContext, useState } from "react";

import employeesList from '../models/employee'; 

export const AppContext = createContext();


const AppContextProvider = (props) =>  {

    // console.log(employeesList); 

    const [employees, setEmployees] = useState(employeesList);
    const [employee, setEmployee] = useState(employeesList[0]);
        
    console.log('employees', employeesList); 

    return (
        <AppContext.Provider value ={{
            employee, 
            setEmployee,
            employees, 
            setEmployees
        }}>
        {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
