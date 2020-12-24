import React from "react";
import Pets from "./Pets";

const Result = ({ pets }) => {
  return (
    <div className="petWrapper">
      {pets.length === 0 ? (
        <h2>No pets found</h2>
      ) : (
        pets.map((pet) => (
          <Pets
            animal={pet.type}
            key={pet.id}
            name={pet.name}
            breed={pet.breeds.primary}
            media={pet.photos}
            location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Result;
