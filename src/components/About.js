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
              This site allows you to manipulate with the text, by allowing you to use the utility provided,you can change the text to 
              <b>UPPERCASE,lowercase,AlTeRnAtInG cAsE,Sentence case,etc </b>
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
              <strong>This is the second item's accordion body.</strong> It is hidden
              by default, until the collapse plugin adds the appropriate classes that
              we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You
              can modify any of this with custom CSS or overriding our default
              variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit
              overflow.
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
              <strong>This is the third item's accordion body.</strong> It is hidden
              by default, until the collapse plugin adds the appropriate classes that
              we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You
              can modify any of this with custom CSS or overriding our default
              variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit
              overflow.
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
