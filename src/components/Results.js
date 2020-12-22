import React from "react";

const Result = ({ pets }) => {
  return (
    <ul>
      {pets.map((item) => {
        return (
          <li>
            Name: {item.name}
            Age: {item.age}
            Gender: {item.gender}
            <img src={item.photos[0].small} alt="image" />
          </li>
        );
      })}
    </ul>
  );
};

export default Result;
