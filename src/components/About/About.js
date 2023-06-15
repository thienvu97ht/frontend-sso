import WeatherState from "./WeatherState";
import { useState } from "react";

const About = () => {
  const [cityState, setCityState] = useState("1236594");

  const handleSelect = (e) => {
    setCityState(e.target.value);
  };

  return (
    <>
      <div className="mx-5">
        <select onChange={handleSelect}>
          <option value="1236594">Hà Nội</option>
          <option value="1252431">Hồ Chí Minh</option>
        </select>
      </div>
      <WeatherState cityState={cityState} />
    </>
  );
};

export default About;
