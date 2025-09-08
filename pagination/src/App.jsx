import { useEffect, useState } from "react";

function App() {
  let [values, setvalues] = useState([]);
  let arr = [1, 2, 3, 4, 5, 6, 7];

  let clicked = (e) => {
    console.log(e);
    const data = async () => {
    try {
      let apihit = await fetch(
        `https://dummyjson.com/products?limit=${10}&skip=${e*10-10}`
      );
      let data = await apihit.json();
      setvalues(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };
   data();
  };
  
  useEffect(() => {
   
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        {arr.map((e, i) => (
          <button
            key={i}
            style={{
              background: "red",
              height: "60px",
              width: "100px",
              textAlign: "center",
              padding: "5px",
              fontSize: "35px",
            }}
            onClick={() => clicked(e)}
          >
            {e}
          </button>
        ))}
      </div>

      <div>
        {values.map((e) => (
          <div key={e.id}>{`${e.id} ${e.title}`}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
