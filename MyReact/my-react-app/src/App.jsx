import React from 'react'
// import './App.css'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';


const App = () => {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my">
        <TextForm heading="Enter your text to analyse" />
      </div>
      {/* <About></About> */}
    </>
  );
}

export default App