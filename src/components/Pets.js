import React from "react";
import { Link } from "@reach/router";

const Pets = ({ animal, name, breed, location, media, id }) => {
  let hero = "http://placecorgi.com/300/300";
  if (media.length) {
    hero = media[0].small;
  }
  return (
    <Link to={`/details/${id}`}>
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
    </Link>
  );
};

export default Pets;
