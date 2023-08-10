import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   // Link
// } from 'react-router-dom';

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }


const toggleMode=()=>{
if(Mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#212840';
  document.body.style.color='white';
  // document.getElementById('text').innerHTML='<span>Enabling Lightmode</span>';
  // document.getElementById('myBox').style.backgroundColor='grey';
  // document.getElementById('myBox').style.color='white';
  showAlert("Dark mode has been enabled","success")
}
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  document.body.style.color='black';
  // document.getElementById('text').innerHTML='<span>Enabling Darkmode</span>';
// document.getElementById('myBox').style.backgroundColor='white';
// document.getElementById('myBox').style.color='black';
showAlert("Light mode has been enabled","success")
}
}


  return (
    <>
    {/* <BrowserRouter> */}
<Navbar title="Textutils" aboutName="About" mode={Mode} togglemode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
<Route exact path="/about">
<About />
</Route> */}
{/* <Route exact path="/home"> */}
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={Mode}/>
{/* </Route>
</Switch> */}
</div>
{/* </BrowserRouter> */}
   
   </> //This are called jsx framgements  

  );
}

export default App;
