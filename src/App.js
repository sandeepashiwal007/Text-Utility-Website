// import logo fromc "./logo.svg";
import "./App.css";
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import React,{ useState } from 'react';
import Alert from "./components/Alert.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App(props) {
  const togglemode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
      if(mode==='light')
      {
        setMode('dark');
        document.body.style.backgroundColor="#12152e";
        showAlert("dark mode started","success");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert("light mode started","success");
      }
    }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }  
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
      
  }

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  return (
    <>
      <Router>
      <Navbar title="TextUtils10" mode={mode} toggleMode={togglemode} showAlert={showAlert}/>
      <Alert alert={alert} showAlert={showAlert}/>
      <div className="container">
        <Switch>
            <Route path="/About">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm heading="Text Academy"  mode={mode} question="sandeep" showAlert={showAlert}/> 
            </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
