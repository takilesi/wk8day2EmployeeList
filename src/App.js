import './App.css';
import React, {useState} from 'react';

import EmpBox from './components/EmpBox';
import Employee from './components/Employee';

function App() {

  const [match, setMatch] = useState({}); 


  return (
    <div className="App">
     <EmpBox setMatch={setMatch}/>
     {/* pass match state as prop from App.js */}
     <Employee match={match}/>
    </div>
  );
}

export default App;