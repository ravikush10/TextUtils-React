import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = '';
        setText(newText)
        // props.showAlert("Text is cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        // props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}> 
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} placeholder='Enter text here...' onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#06012d':'white', color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview here..."}</p>
        </div>
        </>
    )
}
