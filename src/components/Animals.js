import React, { useEffect, useState } from "react";
import useDropdown from "../hooks/useDropdown";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "../components/Results";

const Animal = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPet() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    console.log(animals);
    setPets(animals || []);
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
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default Animal;
