import React, { useState, useEffect } from "react";

const App = () => {
  let [invalues, setinvalues] = useState("");
  let [output, setoutput] = useState([]);
  let [editvalue,seteditvalue]= useState()

  let submited = (e) => {
    e.preventDefault();
    setoutput((e) => [...e, invalues]);
  };

  useEffect(() => {
    localStorage.setItem("todovalues", output);
    // console.log("Updated output:", output);
  }, [output]);

  let valueeditor=(text,i)=>{
      seteditvalue()
     console.log(text,i)
  }

  return (
    <>
      <form
        className="border flex gap-3 justify-center p-4 mt-11"
        onSubmit={submited}
      >
        <input
          type="text"
          placeholder="todo"
          className="border p-2 w-[30%] rounded-2xl text-2xl"
          value={invalues}
          onChange={(e) => setinvalues(e.target.value)}
        />
        <input type="submit" className="border w-[8%] rounded-2xl" />
      </form>

      {/* list output  */}
      <div>
        {output.map((text, i) => (
          <div key={i}>
            {text}
            <button onClick={()=> valueeditor(text,i)}>Edit</button>
            <button>Done</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
