import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  let [inputvalue, setinputvalue] = useState();
  let [output, setoutput] = useState([]);
  
  let updater = () => {
    setoutput([...output, inputvalue]);
  };

  let deleted=(e)=>{
    console.log(e)
  }
  return (
    <>
      <input type="text" onChange={(e) => setinputvalue(e.target.value)} />
      <button onClick={updater}>Add Todo</button>
      {output.map((e) => (
        <div key={uuidv4()}>
          <p>{e}</p>
          <button onClick={(v)=>{
            console.log(v)
          }}>❌</button>
        </div>
      ))}
    </>
  );
};

export default App;
