import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  
  // const setRed=()=>{
  //   document.body.style.backgroundColor='red';
  //   document.body.style.backgroundColor='red';
    
  //   props.showAlert("red mode started","success");
  // }
  // const setGreen=()=>{
  //   document.body.style.backgroundColor='green';
  //   props.showAlert("green mode started","success");
  // }
  // const setBlue=()=>{
  //   document.body.style.backgroundColor='blue';
  //   props.showAlert("blue mode started","success");
  // }
  // const setPink=()=>{
  //   document.body.style.backgroundColor='pink';
  //   props.showAlert("pink mode started","success");
  // }
  return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/About">About</Link>
                    </li>
                
                </ul>
                
            </div>
            <div className="radioButtons mx-5">
                {/* <div className={`form-check form-check-inline form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`}>
                      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode('dark')}}/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div> */}
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" onClick={()=>{props.toggleMode('light')}} />
                  <label className="form-check-label" htmlFor="inlineRadio1">Light Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option2" onClick={()=>{props.toggleMode('dark')}} />
                  <label className="form-check-label" htmlFor="inlineRadio1">Dark Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option3" onClick={()=>{props.toggleMode('danger')}} />
                  <label className="form-check-label" htmlFor="inlineRadio1">Red Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option4" onClick={()=>{props.toggleMode('success')}}/>
                  <label className="form-check-label" htmlFor="inlineRadio2">Green Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option5" onClick={()=>{props.toggleMode('primary')}}/>
                  <label className="form-check-label" htmlFor="inlineRadio3">Blue Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode==='light'?'dark':'light'}`}>
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" onClick={()=>{props.toggleMode('warning')}} />
                  <label className="form-check-label" htmlFor="inlineRadio3">Yellow Mode</label>
                </div>
            </div>
          </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
  };
Navbar.defaultProps=
{
    title:'sandeep'
}