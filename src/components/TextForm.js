import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let convertedToUpperText = text.toUpperCase();
        setText(convertedToUpperText);
        props.showAlert("Converted to upparcase!", "success");
    }
    const handleLowClick = () => {
        let convertedToUpperText = text.toLowerCase();
        setText(convertedToUpperText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const clearTextBox = (event) => {
        setText("");
    }
    const handleCopy = () => {
        // let text = document.getElementById("myBox");
        // text.select();
        // navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text has been copied to clipboard!", "success");
    }
    const handleExtraSpaces = () => {
        let textWithSpace = text.split(/[ ]+/);
        setText(textWithSpace.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }
    const [text, setText] = useState("");
    
    return (
        <>
        <div className="container">
            <h2 className="mb-3">{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearTextBox}>Clear Textbox</button>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Nothing to preview.'}</p>
        </div>
        </>
    )
}
