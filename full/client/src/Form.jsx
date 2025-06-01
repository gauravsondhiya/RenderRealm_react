import React, { useState } from "react";
import Output from "./Output";

const Form = () => {
  let [data, setdata] = useState({
    todo: "",
  });
   let [list,setlist]= useState([])
  let handler = (e) => {
    let { name, value } = e.target;
    setdata((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  let submited = (e) => {
    e.preventDefault();
 
    let updatedata = async () => {
      try {
        let methods = {
          method: "Post",
          body: JSON.stringify({
            data: data.todo,
          }),
        };
        let response = await fetch("http://localhost:3000/posts", methods);
        let ans = await response.json();
       
      } catch (error) {
        console.log(error);
      }
    };
    updatedata();
    setlist((prevOutput) => [...prevOutput, data.todo])
  };
  return (
    <div className="border border-black  w-[90%] m-auto ">
      <form
        onSubmit={submited}
        className="border border-black  w-[80%] 
      [&>input]:border border-red-500 mt-5 m-auto flex justify-center
       [&>input]:rounded-xl text-xl"
      >
        <input
          type="text"
          name="todo"
          value={data.todo}
          onChange={handler}
          placeholder="Add Todo"
          className="h-[50px] w-[390px] text-center"
        />
        <input type="submit" className="w-[90px] ml-3" />
      </form>
      <Output values={list}/>
      
    </div>
  );
};

export default Form;
