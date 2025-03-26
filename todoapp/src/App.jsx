import React, { useState } from "react";

function App() {
  let [invalue, setinvalue] = useState("");

  let [outvalue, setOutvalue] = useState([]);

  function clicker() {
    if (!invalue == "") {
      setOutvalue([...outvalue, invalue]);
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
          <div key={Math.random()} style={{ display: "flex", gap: "30px" }}>
            <p>{e}</p>
            <button
              onClick={() => {
                let ans = outvalue.filter((v)=>{return e!=v })
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
