import React, { useState } from 'react'



export default function TextForm(props) {
    //Function to make string to upper case
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    //Function to make String to Lower case
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    //Function to capitalize the first letters of each word of the string
    const handleCapClick = () => {
        let newText = () => {
            let finalStrArr = [];
            let strArr = text.split(" ")
            strArr.forEach(element => {
                finalStrArr.push(element.charAt(0).toUpperCase() + element.slice(1));
            });
            let finalStr = finalStrArr.join(" ")
            return finalStr;
        }
        setText(newText)
    }

    //Function to speak the given text
    const speakUp = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }


    const handleOnChange = (event) => {
        // console.log("OnChange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                
                {/* Button to make string to upper case */}
                <button className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase</button>
                
                {/* Button to make String to Lower case */}
                <button className="btn btn-primary mx-2" onClick={handleLoClick}> Convert to LowerCase</button>
               
                {/* Button to make string to upper case */}
                <button className="btn btn-primary mx-2" onClick={handleCapClick}> Convert to Capitalized Case</button>
               
                {/* Button to speak the given text */}
                <button type="submit" onClick={speakUp} className="btn btn-danger mx-2">Speak </button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                {/* below data is being generated by the data provided by "https://scholarwithin.com/average-reading-speed" for adults */}
                <p>{0.003 * text.split(" ").length} minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>

    )
}
