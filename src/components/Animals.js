import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const Animal = () => {
  const [animal, setAnimal] = useState("dog");
  return (
    <div>
      <label htmlFor="animal">
        Animal:
        <select
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option>All</option>
          {ANIMALS.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Animal;
