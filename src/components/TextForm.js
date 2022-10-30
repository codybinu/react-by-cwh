import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("UpperCase was clicked")
        let newText = text.toUpperCase();
        // setText("You have clicked on handleUpClick")
        setText(newText)
    }
    const handleOnChange= (event)=>{
        // console.log("OnChange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter Text Here');
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}> Convert to UpperCase</button>
        </>

    )
}
