import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CopyToClipboard from 'react-copy-to-clipboard';


export default function TextForm(props) {

  let textFormStyle={
    color: props.mode==='light'?'black':'white',
    backgroundColor: props.mode==='light'?'#ECEBEB':'#15295F',
    border: '1px solid',
    borderColor: props.mode==='light'?'#ECEBEB':'#0a0a4a',
    borderRadius: '30px'
}

  const handleUpperCaseClick = () => {
    console.log("Uppercase was clicked  " + text);
    // setText('You have clicked on handleUpperCaseClick')
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UPPER CASE", "success");

  }

  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case", "success");
  }
  const sentenceCase = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    setText(newText);
    props.showAlert("Converted to Sentence case", "success");
  }

  const titleCase = () => {
    let newText = text.toLowerCase();
    newText = newText.split(" ")//splits text whenever a space is encountered
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
    }
    newText = newText.join(" ")
    setText(newText)
    props.showAlert("Converted to Title Case", "success");
  }

  const alternatingCase = () => {
    let newText = text.toLowerCase().split("");
    console.log(newText)
    for (let i = 0; i < newText.length; i += 2) {
      newText[i] = newText[i].toUpperCase()
    }
    newText = newText.join("")
    setText(newText)
    //  let newText=text.split("").map((letter,i)=>(i%2)===0 ?letter.toUpperCase():letter.toLowerCase()).join("")
    //  setText(newText)
    props.showAlert("Converted to aLtErNaTiNg cAsE", "success");
  }
  const copy = () => {
    props.showAlert("Text Copied", "success");
  }
  const handleOnChange = (event) => {
    //   console.log("Text area changed "+text);
    setText(event.target.value)
  }

  //clears the text are onClick
  // const handleTextAreaOnClick=(event)=>{
  //     let clearText=" "
  //     setText(clearText)
  // }


  const cleartext = () => {
    let clearText = ""
    setText(clearText)
  }

  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{
        color: props.mode === 'light' ? 'white' : 'grey',
        backgroundColor: props.mode === 'light' ? 'white' : '#0a0a4a'
      }}>
        <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h2>
        <div className="col-md">
          <label htmlFor="myBox" className='col-form-label' style={{ color: "Blue", fontWeight: "bold " }}>{props.textarea}</label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            // onClick={handleTextAreaOnClick}
            rows={8}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#15295F',
              color: props.mode === 'light' ? 'black' : 'white'
            }}
          />
          <button disabled={text.length===0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleUpperCaseClick} style={{ marginTop: "10px" }}>
            Convert to Uppercase
          </button>

          <button disabled={text.length===0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleLowerCaseClick} style={{ marginTop: "10px" }}>
            Convert to Lowercase
          </button>

          <button disabled={text.length===0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={sentenceCase} style={{ marginTop: "10px" }}>
            Sentence case
          </button>

          <button disabled={text.length===0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={titleCase} style={{ marginTop: "10px" }}>
            Title Case
          </button>

          <button disabled={text.length===0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={alternatingCase} style={{ marginTop: "10px" }}>
            AlTeRnAtInG CaSe
          </button>


          <CopyToClipboard text={text}>
            <button disabled={text.length===0} type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={copy} style={{ marginTop: "10px" }}>
              CopytoClipboard
            </button>

          </CopyToClipboard>


          <button disabled={text.length===0} type="button" className="btn btn-danger mx-2" onClick={cleartext} style={{ marginTop: "10px" }}>
            Clear Text
          </button>
        </div>
      </div>

      <div className="container my-4" style={textFormStyle}>
        <h2><b>Your text summary</b> </h2>
        <p><b>Number of words in your text:</b> {text.split(" ").filter((element) => { return element.length !== 0 }).length} </p>
        <p><b> Number of chartacters in your text:</b> {text.length}</p>
        <p><b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> minutes taken to read the words</p>
        </div>
        <div className="container my-2" style={textFormStyle}>
        <h3><b>PREVIEW:-</b></h3>
        {/* <p>{text}</p> */}
        <p>{text.length > 0 ? text : "Enter in text box to preview it here"}</p>
        </div>
       
      
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string,
  textarea: PropTypes.string
}
TextForm.defaultValue = {
  textarea: "textArea here",
  heading: "heading here"
}