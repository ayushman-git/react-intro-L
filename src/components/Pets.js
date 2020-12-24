import React from "react";

const Pets = ({ animal, name, breed, location, media }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <div>
      <h2>{animal}</h2>
      <img src={hero} />
      <p>
        <strong>Name: </strong>
        {name} <br />
        <strong>Breed: </strong>
        {breed} <br />
        <strong>Location: </strong>
        {location}
      </p>
    </div>
  );
};

export default Pets;
