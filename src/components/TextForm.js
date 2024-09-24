
import React, { useState } from 'react';




export default function TextForm(props) {
const handleUpClick = () => {
console.log("Uppercase was clicked");

let newText = text.toUpperCase();
setText(newText);

}

const handleLoClick = (event) => {
   let newText= text.toLowerCase();
   setText(newText)
    }


const handleOnChange = (event) => {
setText(event.target.value);
}

const [text, setText] = useState('');



return (
    <>
<div className="container">
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
<button className="btn btn-dark mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary" onClick={handleLoClick}>Convert to LowerCase</button>
</div>
</div>
<div className="container my-5">
    <h1>You text summary </h1>
    <p>{text.split(" ").length} Words and  {text.length}  Characters </p>
    <p>{0.008* text.split(" ").length}   Minutes read  </p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
);
}























// import React,{useState} from 'react'

// export default function TextForm(props) {
//     const handleUpClick =()=>{
//         console.log("uppercase was click")
//         setText("You have changed the text ")
//     }


//      const handleOnChange =(event)=> {
//         console.log("On Change");
//         setText(event.target,value);
//      }  
    
//     const [text, setText] = useState('Enter text here 2 ');



//   return (
//     <div>
//         <h1>{props.heading}-{text}</h1>
//         <div className="mb-3">
//         <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase </button>
//         </div>
//     </div>
//   )
// }
