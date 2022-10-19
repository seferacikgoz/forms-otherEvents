import { useState } from "react";

const KeyboardClipboard = () => {

  const [inputValue, setInputValue] = useState("");
  const handleKeyDown = (e) => {
    console.log(e.keyCode );
    if(e.keyCode >= 96 && e.keyCode <= 105){
      alert("Please dont enter a number")
    }
  }

  return <div className="container text-center">
    <h1>CLIPBOARD EVENTS</h1>
    <input className="form-control" type="text" onChange={(e)=> {
      e.target.value = e.target.value.toLocaleUpperCase()
      setInputValue(e.target.value)} 
      }
      onKeyDown={handleKeyDown}
      />

    <p className="text-start mt-4">{inputValue.toLocaleUpperCase()}</p>

  </div>
  
}

export default KeyboardClipboard