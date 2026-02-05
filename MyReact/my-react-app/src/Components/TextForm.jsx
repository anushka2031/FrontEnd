import React, { useState } from 'react'

const TextForm = (props) => {

   const [text , setText] = useState("")

   const handleUClick = () =>{

      // console.log("hii")
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to upper case" , "success")
   }

   const handleLClick = () =>{

      // console.log("hii")
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case" , "success")
   }

   const handleClearClick = () =>{

      let newText = "";
      setText(newText)
      props.showAlert("Text area is cleared" , "success")
   }

  //  const handleCmClick = () =>{

  //   let newtext = text;
  //   return newtext.split(/[\s_-]+/)
  //   .map((a,b) =>{
  //     if(b == 0){
  //       return a.toLowerCase();
  //     }
  //     return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase();
  //   }).join('')
      
  //  }


   const handleCopy = () =>{

    var text = document.getElementById("textBox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied" , "success")

   }

   const handleExtraSpaces = () => {

    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showAlert("Extra spaces are removed" , "success")
   }

   const handleChange = (e) =>{
      // console.log("helloooo")
      setText(e.target.value)
   }

  return (
    <>
      <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
         <h1>{props.heading}</h1>

       <div className="mb-3">
         {/* <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
         <textarea className="form-control" placeholder='Enter your text here' value={text} id="textBox" onChange={handleChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}} rows="8"></textarea>
       </div>

       <button className='btn btn-primary mx-2' onClick={handleUClick}>Convert to Uppercase</button>

       <button className='btn btn-primary mx-2' onClick={handleLClick}>Convert to Lowercase</button>

       <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>

       <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

       <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>

      </div>

      <div className="container my-3 " style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>

        <p>{text.split(" ").length} words , {text.length} characters and {text.split(".").length} sentences</p>

        <p>{0.008*text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview in here"}</p>

      </div>
    </>
  )
}

export default TextForm