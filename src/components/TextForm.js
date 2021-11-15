import React, { useState } from 'react';
// import PropTypes from 'prop-types'
export default function TextForm(props) {
    const cursorclicked = ()=>{

                let newText=text.toUpperCase();
                setText(newText);
                props.showAlert("converted to Upper","success");
    }
    
    const cursorclickedLower = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lower","success");
    }
    const cursorcurrent = (event)=>{
        setText(event.target.value);

    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{props.question}</label>
                    <textarea className="form-control" id="myBox" rows="3" value={text} onChange={cursorcurrent} style={{backgroundColor:props.mode==='light'?'white':'grey' ,color:props.mode==='light'?'black':'white'}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={cursorclicked} > change to upper </button>
                <button className="btn btn-primary mx-2" onClick={cursorclickedLower}> change to Lower </button>
            </div>
            <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>New Container</h1>
                words  are <b>{text.split(" ").length-1}</b> and letters are {text.length}
                <h3>preview</h3>
                <p>{text.length>0?text:'please enter text'}</p>
            </div>
        </>
    );
}