import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function App() {
  let [invalue, setinvalue] = useState("");

  let [outvalue, setOutvalue] = useState([]);

  function clicker() {
    if (!invalue == "") {
      setOutvalue([...outvalue,{id:uuidv4(),value:invalue}]);
      setinvalue("");
    }
  
  }
  return (
    <>
      <h1>Todo app</h1>
      <input
        type="text"
        value={invalue}
        onChange={(e) => setinvalue(e.target.value)}
      />
      <button onClick={clicker}>Add Todo</button>
      <div>
        {outvalue.map((e) => (
          <div key={e.id} style={{ display: "flex", gap: "30px" }}>
            <p>{e.value}</p>
            <button
              onClick={() => {
                let ans = outvalue.filter((v)=>{return e.id!=v.id })
                setOutvalue(ans);
              }}
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
