
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";


function App() {
  const [ mode , setMode]=useState('light');
  const [alert ,setAlert]=useState('null');

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },1800)
  
}

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#021628';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }
  return (
  <>
{/* <Navbar title="MyApp" aboutText="About us"/> */}
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
 <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            
          </Route>
         
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}> */}
           {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> */}
          </Route>
        </Routes>
        </div>
 </Router> 

  </>
  );
}

export default App;
