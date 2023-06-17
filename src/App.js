import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  // //to set Red Mode
  // const [redMode, setRedMode] = useState('light')

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#0a0a4a';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  // const toggleRedMode=()=>{
  //   if (redMode==='light')
  //   {
  //     setRedMode('dark')
  //   }else{
  //     setRedMode('light')
  //   }
  // }
  return (
    <>
      <BrowserRouter basename="/textutils1">
        <Navbar title="textUtils1" about="About Us" contact="Contact Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>
        <div className='container my-3' mode={mode}>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>}></Route>
            <Route
             exact path="/textutils1"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }>

            </Route>
          </Routes>
        </div>
      </BrowserRouter>
      {/* <Navbar title="textUtils1"></Navbar> */}
      {/* <Navbar title="textUtils1"  about="About Us" contact="Contact Us" mode={mode} toggleMode={toggleMode} /> */}
      {/* <Alert alert={alert}></Alert> */}
      {/* <Navbar/> */}
      {/* <div className='container my-3'> */}
      {/* <TextForm heading="Enter the text to analyze" showAlert={showAlert} textarea="Enter your text below" mode={mode} /> */}
      {/* <About mode={mode}/> */}
      {/* </div> */}
    </>
  );
}

export default App;
