import React from 'react'
//import { useState } from 'react'


export default function About(props) {


  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   border: '1px solid white'
  // })
  let myStyle={
          color: props.mode==='light'?'black':'white',
          backgroundColor: props.mode==='light'?'white':'#15295F',
          border: '1px solid',
          borderColor: props.mode==='light'?'black':'#0a0a4a'
  }

  // const [buttonText, setButtonText] = useState("Enable Dark Mode")
  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',

  //     })
  //     setButtonText('Enable Light Mode')


  //   } else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',

  //     })
  //     setButtonText("Enable Dark Mode")
  //   }
  // }
  return (
    <div className='container pb-3' style={{backgroundColor: props.mode==='light'?'white':'#15295F',color: props.mode==='light'?'black':'white'}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={{borderColor: props.mode==='light'?'black':'#0a0a4a'}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>About This Site</strong>

            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#0a0a4a',color: props.mode==='light'?'black':'white'}}>
              TextUtils provides utility to manipulate text with the options given.You can Change the Text to UpperCase,
              LowerCase,Alternating Case,Scentence Case,Title Case,You can also Copy the text to Clipboard and clear them.
                    <br></br>
                    This Site also counts the Number of words and characters typed.
                    <br></br>
                    The typed text can be previewed below.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{borderColor: props.mode==='light'?'black':'#0a0a4a'}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#0a0a4a',color: props.mode==='light'?'black':'white'}}>
            TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. 
            Thus it is suitable for writing text with word/ character limit.
            This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

            </div>
          </div>
        </div>
        <div className="accordion-item" style={{borderColor: props.mode==='light'?'black':'#0a0a4a'}}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Thank You For Visiting</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor: props.mode==='light'?'white':'#0a0a4a',color: props.mode==='light'?'black':'white'}}>
                Thank You For Visiting Us, Hope to have provided you with good functionality. See You Soon!!!
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button type="button" onClick={toggleStyle} className={`btn btn-${myStyle.backgroundColor === 'white' ? 'dark' : 'light'}`}>{buttonText}</button>
      </div> */}
    </div>
  )
}
