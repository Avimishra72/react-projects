import React from "react";

/* Images */
import weatherImage from "./img/weather.webp";

/* Components */
import Dropdown from "./component/Dropdown";
import Button from "./component/Button";

function WeatherApp() {
  return (
    <>
      {/* Main Container Starts */}
      <div className="w-full h-dvh overflow-hidden">
        <div className="weather-img">
          <img src={weatherImage} alt="Weather" />
        </div>
        {/* Weather Content Starts */}
        <div className="z-[2] relative w-full h-full p-8 ">
          <div className="flex gap-8 justify-center flex-wrap mb-14">
            <Dropdown name="country" id="country" />
            <Dropdown name="state" id="state" />
            <Button
              text="Get Weather"
              onClick={() => console.log("Searching...")}
            />
          </div>
          <h1 className="text-5xl font-bold text-center text-white mb-24">
            Mumabi, India
          </h1>
          <div className="flex gap-8 justify-center flex-wrap mb-14">
            <div className="flex gap-4 items-center">
              <h3 className="text-3xl font-semibold text-white">26 Deg</h3>
            </div>
          </div>
        </div>
        {/* Weather Content Ends */}
      </div>
      {/* Main Container Ends */}
    </>
  );
}

export default WeatherApp;
