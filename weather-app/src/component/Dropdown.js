import React from "react";
import { City } from "country-state-city";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function Dropdown({ name, id, setData }) {
  // const cities = City.getCitiesOfState("IN", "DL");
  const cities = City.getCitiesOfCountry("IN");
  const uniqueCities = [...new Set(cities.map((item) => item.name))];
  // console.log(cities[0]);
  // console.log(uniqueCities);

  function handleChange(e) {
    setData(e);
  }
  return (
    <>
      {/* Dropdown Starts */}
      <Autocomplete
        disablePortal
        options={uniqueCities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City Name" />}
        onChange={(e) => handleChange(e.target.textContent)}
        style={{ background: "var(--wh)", color: "#000" }}
      />

      {/* Dropdown Ends */}
    </>
  );
}

export default Dropdown;
