import { useState, useEffect } from "react";
const API_KEY = "461d2897729a4426a56104039220201";
const Weather = (props) => {
  const [location, setLocation] = useState("Arbil");
  const [weather, setWeather] = useState({
    city: location,
    country: "Iraq",
    localtime: "2021-12-21 15:14",
    icon: "//cdn.weatherapi.com/weather/64x64/night/116.png",
    temp: 10,
  });

  const updateWeather = async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`
    );
    const data = await res.json();
    console.log(data);
    const newWeather = {
      city: data.location.name,
      country: data.location.country,
      localtime: data.location.localtime,
      icon: data.current.condition.icon,
      temp: data.current.temp_c,
    };
    setWeather(newWeather);
  };

  useEffect(() => {
    updateWeather();
  }, [location]);

  return (
    <div className="weather_container">
      <div className="search-area">
        <label htmlFor="location">
          Location
          <select
            id="location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              updateWeather();
            }}
          >
            <option value="Arbil">Erbil</option>
            <option value="Kirkuk">Kirkuk</option>
            <option value="London">London</option>
            <option value="Koya Iraq">Koya</option>
            <option value="baghdad">Baghdad</option>
            <option value="basrah">basra</option>
          </select>
        </label>
      </div>

      <div className="search-area-2">
        <label htmlFor="location">
          Location
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
      </div>

      <h1>
        {" "}
        {weather.city},{weather.country}{" "}
      </h1>
      <h3>{weather.localtime}</h3>
      <img src={weather.icon} alt={weather.location} />
      <h1>{weather.temp}</h1>
    </div>
  );
};
export default Weather;
