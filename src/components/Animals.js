import React, { useEffect, useState, useContext } from "react";
import useDropdown from "../hooks/useDropdown";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Result from "./Result";
import ThemeContext from "./ThemeContext";

const Animal = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme] = useContext(ThemeContext);

  async function requestPet() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
    console.log(animals);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds }) => {
      const breedString = breeds.map(({ name }) => name);
      setBreeds(breedString);
    });
  }, [animal, setBreeds, setBreed]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPet();
        }}
      >
        <div className="location">
          <p>{location}</p>
          <label htmlFor="location">
            Location:
            <input
              id="location"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <AnimalDropdown /> <br />
        <BreedDropdown />
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default Animal;
