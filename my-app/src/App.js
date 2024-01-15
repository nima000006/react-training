import React, { useState } from "react";
import Table from "./component/Table";
const App = () => {
    const [myArray, setMyArray] = useState([
        {
          name: "nima",
          age: 26,
          email: "nima@nima.com",
          id: "1",
        },
        {
          name: "jacob",
          age: 16,
          email: "jacob@jacob.com",
          id: "2",
        },
        {
          name: "lale",
          age: 24,
          email: "lale@lale.com",
          id: "3",
        },
      ])
  const deleteHandler = (id) => {
      const updateArray = myArray.filter((item) => item.id !== id);
      setMyArray(updateArray)
  };
  const [value, setValue] = useState(0)
  const clickHandler = (type) => {
    if(type === "increase") setValue(value + 1);
    else {
      if(value > 0) setValue(value - 1);
       else alert("impossible!!")
    }
       
  }
  return (
    <>
      <Table array={myArray} deleteHandler={deleteHandler} />
      <div style={{display: 'flex', justifyContent: 'center'}}>
         <button onClick={() => clickHandler("increase")}>+</button>
            <span>{value}</span>
         <button onClick={() => clickHandler("decrease")}>-</button>
      </div>
    </>
  );
};

export default App;
