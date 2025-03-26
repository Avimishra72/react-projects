import React, { useEffect, useState } from "react";
import axios from "axios";

const toCelsius = (k) => (k - 273.15).toFixed(2);

const Forecast = ({ cityData }) => {
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?appid=d8c1da3592550102f54e18c73825c105&q=${cityData}`
      )
      .then((response) => setForecastData(response.data))
      .catch((err) =>
        console.error("Error fetching forcasting weather data: ", err)
      );
  }, [cityData]);

  const forecastFilterData =
    forecastData?.list?.filter((dataList) =>
      dataList.dt_txt.includes("15:00:00")
    ) || [];

  return (
    <>
      {/* Forcating Card Starts */}
      {forecastFilterData.map((ff_data, key) => (
        <div className="bg-[var(--wh)] p-4 rounded-lg w-[250px]" key={key}>
          <h3 className={"text-3xl font-semibold text-black text-center mb-6"}>
            {ff_data?.dt_txt.split(" ")[0]}
          </h3>
          <h3 className={"text-3xl font-semibold text-black text-center"}>
            {toCelsius(ff_data?.main?.feels_like)}°
          </h3>
        </div>
      ))}
      {/* Forcating Card Ends */}
    </>
  );
};

export default Forecast;
