import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");

  return (
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
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
