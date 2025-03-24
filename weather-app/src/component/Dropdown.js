import React from "react";
import { City } from "country-state-city";

function Dropdown({ name, id, onChange }) {
  // const cities = City.getCitiesOfState("IN", "DL");
  const cities = City.getCitiesOfCountry("IN");
  // console.log(cities[0]);

  return (
    <>
      {/* Dropdown Starts */}
      <div className="w-[400px] rounded-md overflow-hidden">
        <select
          name={name}
          id={id}
          className="w-full h-[50px] bg-[var(--bl)] text-white px-2 text-xl"
          onChange={(e) => onChange(e.target.value)}
        >
          {cities.map((value, key) => (
            <option value={value?.name} key={key}>
              {value?.name}, {value?.stateCode}
            </option>
          ))}
        </select>
      </div>
      {/* Dropdown Ends */}
    </>
  );
}

export default Dropdown;
