import React, { useEffect, useState } from "react";
import axios from "axios";

/* Components */
import Dropdown from "./component/Dropdown";
import Button from "./component/Button";
import WeatherDeg from "./component/WeatherDeg";

const toCelsius = (k) => (k - 273.15).toFixed(2);
function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Delhi");

  const getWeatherImage = (description = "") => {
    const desc = description.toLowerCase().trim();
    switch (desc) {
      case "clear sky":
        return "/img/clear-sky.jpg";
      case "few clouds":
        return "/img/few-cloud.webp";
      case "haze":
        return "/img/haze-sky.jpg";
      case "scattered clouds":
        return "/img/scattered-sky.jpg";
      case "broken clouds":
        return "/img/broken-clouds.jpg";
      case "overcast clouds":
        return "/img/over-cast.webp";
      default:
        return "/img/few-cloud.webp";
    }
  };

  useEffect(() => {
    if (!city) return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8c1da3592550102f54e18c73825c105`
      )
      .then((response) => setWeatherData(response.data))
      .catch((err) => console.error("Error fetching weather data: ", err));
  }, [city]);

  return (
    <>
      {/* Main Container Starts */}
      <div className="w-full h-dvh overflow-hidden">
        <div className="weather-img">
          <img
            src={getWeatherImage(weatherData?.weather?.[0]?.description)}
            alt="Weather"
          />
        </div>
        {/* Weather Content Starts */}
        <div className="z-[2] relative w-full h-full p-8 ">
          <div className="flex gap-8 justify-center flex-wrap mb-14">
            <Dropdown name="city" id="city" onChange={setCity} />
            {/* <Dropdown name="state" id="state" /> */}
            {/* <Button text="Get Weather" onClick={getWeatherData} /> */}
          </div>
          <h1 className="text-5xl font-bold text-center text-white mb-24">
            {weatherData?.name || "Select City"}, {weatherData?.sys?.country}
          </h1>
          <div className="flex gap-x-40 gap-y-12 justify-center flex-wrap mb-14  ">
            <WeatherDeg
              text={toCelsius(weatherData?.main?.feels_like)}
              size="5xl"
              customStyle="w-full text-center"
            />
            <WeatherDeg
              text={toCelsius(weatherData?.main?.temp_min)}
              size="3xl"
            />
            <WeatherDeg
              text={toCelsius(weatherData?.main?.temp_max)}
              size="3xl"
            />
          </div>
          <h1 className="text-3xl font-semibold text-center text-white">
            {weatherData?.weather?.[0]?.description}
          </h1>
        </div>
        {/* Weather Content Ends */}
      </div>
      {/* Main Container Ends */}
    </>
  );
}

export default WeatherApp;
