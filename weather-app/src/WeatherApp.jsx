import React, { useEffect, useState } from "react";
import axios from "axios";

/* Components */
import Dropdown from "./component/Dropdown";
import WeatherDeg from "./component/WeatherDeg";
import Forecast from "./Forecast";

const toCelsius = (k) => (k - 273.15).toFixed(2);
function WeatherApp() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("Mumbai");

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

  // console.log(city);

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
          <div className="flex gap-8 justify-center flex-wrap mb-8">
            <Dropdown name="city" id="city" setData={setCity} />
          </div>
          {/* Current Day Data Starts */}
          <div className="mb-14">
            <h1 className="text-5xl font-bold text-center text-white mb-6">
              {weatherData?.name || "Select City"}, {weatherData?.sys?.country}
            </h1>
            <div className="flex gap-x-40 gap-y-6 justify-center flex-wrap mb-6  ">
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
          {/* Current Day Data Ends */}

          {/* Forcasting Data Starts */}
          <h3 className={"text-3xl font-bold text-white text-center mb-8"}>
            Upcoming Weather Report
          </h3>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            <Forecast cityData={city} />
          </div>
          {/* Forcasting Data Ends */}
        </div>
        {/* Weather Content Ends */}
      </div>
      {/* Main Container Ends */}
    </>
  );
}

export default WeatherApp;
