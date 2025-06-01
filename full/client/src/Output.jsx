import React, { useEffect, useState } from "react";

const Output = (props) => {
  let [outputdata, setoutputdata] = useState([]);
  let [edit,setedit] = useState("")
  let [update,setupdate] = useState("")

  let datafetch = async () => {
    let response = await fetch("http://localhost:3000/posts");
    let data = await response.json();
    setoutputdata(data);
  };

  useEffect(() => {
    datafetch();
  }, [props]);

  let deleted = async (e) => {
    try {
      let response = await fetch("http://localhost:3000/posts" + "/" + e, {
        method: "delete",
      });
      response = await response.json();
      if (response) {
        datafetch();
      }
    } catch (error) {
      console.log("error deleted function");
      console.log(error);
    }
  };
  let editsubmit= async(id)=>{
    try {
      let putmethod={
        method:"Put",
        body: JSON.stringify({
          data:edit.data
        })
      }
        let response = await fetch(`http://localhost:3000/posts${id}`,putmethod)
        response= await response.json()
        console.log(response)
    }
     catch (error) {
      console.log(error)
    }
   }

  let Edited = (id) => {

  let ans = outputdata.filter((e)=>{
    return e.id==id
  })
  // console.log(ans[0].data)
  setedit(ans[0].data)
  editsubmit(id)
  };

  return (
    <div>
      <input className="h-[50px] w-[390px] text-center border border-red-700 mt-5"
       type="text" 
       value={edit}
       onChange={(e)=>setedit(e.target.value)}/>
       <button className="h-[50px] w-[100px] text-center border border-red-700 ml-5"
       onClick={editsubmit}>submit</button>


      <div className="border m-auto mt-5">
        {outputdata.map((e, i) => (
          <div
            key={i}
            className="border border-yellow-400 flex justify-center "
          >
            <h1 className="w-[60%] text-center">{e.data}</h1>
            
            <div className="w-[15%]">
              <button className="border w-[100%] rounded" onClick={() => deleted(e.id)}>
                Done
              </button>
            </div>
            <div className="w-[15%]">
              <button
                className="border w-[100%] rounded"
                onClick={() => Edited(e.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Output;
