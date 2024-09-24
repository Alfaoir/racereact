
import React, { useState } from 'react';




export default function TextForm(props) {
const handleUpClick = () => {
console.log("Uppercase was clicked");

let newText = text.toUpperCase();
setText(newText);

}




const handleOnChange = (event) => {
setText(event.target.value);
}

const [text, setText] = useState('Enter text here');

return (
<div>
<h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
</div>
</div>
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
