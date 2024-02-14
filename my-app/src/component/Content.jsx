import React, {useState} from "react";
import "./Content.css";
const Content = ({ data, onDelete, onAdd }) => {

  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [day, setDay] = useState("");
  const handleAdd = () => {
    // Call the onAdd function passed from the parent component
    if (onAdd) {
      onAdd({ name, hours, day });
      // Clear input fields after adding
      setName("");
      setHours("");
      setDay("");
    }
  };
  const handleDelete = (id) => {
    // Call the onDelete function passed from the parent component
    if (onDelete) {
      onDelete(id);
    }
  };
  return (
    <div className="content-container">
       <div className="items-container-new">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {data.map(({ id, src, name, hours, day }) => {
        return (
          <div key={id} className="items-container">
            <span className="picture-container">
              <img src={src} />
            </span>
            <div className="course-info">
              <p>{name}</p>
              <div>
                <span>{hours} - </span>
                <span>{day}</span>
              </div>
            </div>
            <button id={id}>Reserve</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
