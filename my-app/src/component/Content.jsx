import React from "react";
import "./Content.css";
const Content = ({ data }) => {
  return (
    <div className="content-container">
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
          </div>
        );
      })}
    </div>
  );
};

export default Content;
