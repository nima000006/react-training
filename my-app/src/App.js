import React, { useState } from "react";
import Header from "./component/Header";
import './App.css'
import Content from "./component/Content";
import Form from "./component/Form";
const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
    // const [myArray, setMyArray] = useState([
    //     {
    //       name: "nima",
    //       age: 26,
    //       email: "nima@nima.com",
    //       id: "1",
    //     },
    //     {
    //       name: "jacob",
    //       age: 16,
    //       email: "jacob@jacob.com",
    //       id: "2",
    //     },
    //     {
    //       name: "lale",
    //       age: 24,
    //       email: "lale@lale.com",
    //       id: "3",
    //     },
    //   ])
  // const deleteHandler = (id) => {
  //     const updateArray = myArray.filter((item) => item.id !== id);
  //     setMyArray(updateArray)
  // };
  // const [value, setValue] = useState(0)
  // const clickHandler = (type) => {
  //   if(type === "increase") setValue(value + 1);
  //   else {
  //     if(value > 0) setValue(value - 1);
  //      else alert("impossible!!")
  //   }
       
  // }
  const arrayCourses = [
    {id: '1',name: "react", hours: 22, day:'Sundays', src:''},
    {id: '2',name: "javascript", hours: 32, day:'Wednesdays', src:''},
    {id: '3',name: "next", hours: 42, day:'Mondays', src:''}
  ]
  return (
    <>
      {/* <Table array={myArray} deleteHandler={deleteHandler} />
      <div style={{display: 'flex', justifyContent: 'center'}}>
         <button onClick={() => clickHandler("increase")}>+</button>
            <span>{value}</span>
         <button onClick={() => clickHandler("decrease")}>-</button>
      </div> */}
      <Header isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
      <div className="container">
          <Form isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>
          <Content data={arrayCourses}/>
      </div>
      
    </>
  );
};

export default App;
