import React, { useState } from "react";
import Header from "./component/Header";
import './App.css'
import Content from "./component/Content";
import Form from "./component/Form";
import Login from './pages/Login';
import Slidebar from './component/Slidebar';
import Product from './component/Products';
const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [arrayCourses, setArrayCourses] = useState([
    { id: '1', name: "react", hours: 22, day: 'Sundays', src: '' },
    { id: '2', name: "javascript", hours: 32, day: 'Wednesdays', src: '' },
    { id: '3', name: "next", hours: 42, day: 'Mondays', src: '' }
  ]);
  const handleInputChange = (value) => {
    setInputValue(value);
  };
  const handleDelete = (id) => {
    // Filter out the item with the provided id
    const updatedCourses = arrayCourses.filter(course => course.id !== id);
    // Update the state with the filtered array
    setArrayCourses(updatedCourses);
  };
  const handleAdd = (newCourse) => {
    // Generate a unique id for the new course
    const id = (Math.random() * 1000).toFixed(0).toString();
    // Add the new course to the array
    setArrayCourses([...arrayCourses, { ...newCourse, id }]);
  };
  return (
    <>
  
      <Header  inputValue={inputValue}/>
      <div style={{display: "flex"}}>
      <Slidebar/>
      <Product/>
      </div>
    
      {/* <div className="container"> */}
          {/* <Form isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} onInputChange={handleInputChange}/>
          <Content data={arrayCourses} onDelete={handleDelete} onAdd={handleAdd}/> */}

         
      {/* </div> */}
      
    </>
  );
};

export default App;
