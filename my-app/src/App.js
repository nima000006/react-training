import React, { useState } from "react";

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
  return (
    <>
      <table style={{ margin: "10px auto", width: "70%", textAlign: "center" }}>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Delete button</th>
        </tr>

        {myArray.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => deleteHandler(item.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default App;
