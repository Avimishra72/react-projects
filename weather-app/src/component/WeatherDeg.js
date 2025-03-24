import React from "react";

function WeatherDeg({ text, size, customStyle }) {
  return (
    <h3 className={`text-${size} font-semibold text-white ${customStyle}`}>
      {text}°
    </h3>
  );
}

export default WeatherDeg;
