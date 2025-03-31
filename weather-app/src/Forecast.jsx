import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import axios from "axios";

const toCelsius = (k) => (k - 273.15).toFixed(2);

const Forecast = ({ cityData }) => {
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    async function forcastData() {
      try {
        let response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?appid=d8c1da3592550102f54e18c73825c105&q=${cityData}`
        );
        setForecastData(response.data);
      } catch (error) {
        console.error("Error fetching forcasting weather data: ", error);
      }
    }
    forcastData();
  }, [cityData]);

  const forecastFilterData = forecastData?.list || [];
  // const forecastFilterData =
  //   forecastData?.list?.filter((dataList) =>
  //     dataList.dt_txt.includes("15:00:00")
  //   ) || [];

  return (
    <>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={5}
        navigation
      >
        {forecastFilterData.map((ff_data, key) => (
          <SwiperSlide key={key}>
            <div className="bg-[var(--wh)] p-4 rounded-lg w-full">
              <h3
                className={"text-3xl font-semibold text-black text-center mb-6"}
              >
                {ff_data?.dt_txt.split(" ")[0]}, <br />
                {ff_data?.dt_txt.split(" ")[1]}
              </h3>
              <h3 className={"text-3xl font-semibold text-black text-center"}>
                {toCelsius(ff_data?.main?.feels_like)}°
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Forecast;
