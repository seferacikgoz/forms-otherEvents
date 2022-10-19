import { useState } from "react";

const KeyboardClipboard = () => {

  const [inputValue, setInputValue] = useState("");

console.log(inputValue)
  return <div className="container text-center">
    <h1>CLIPBOARD EVENTS</h1>
    <input className="form-control" type="text" onChange={(e)=> setInputValue(e.target.value) 
      }/>

    <p>{inputValue}</p>

  </div>
  
}

export default KeyboardClipboard