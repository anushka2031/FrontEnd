import React, { useState } from 'react'
// import './App.css'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';


const App = () => {

  let [mode,setMode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my">
        <TextForm heading="Enter your text to analyse" />
      </div>
      {/* <About></About> */}
    </>
  );
}

export default App