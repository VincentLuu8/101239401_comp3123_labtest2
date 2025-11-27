import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    if (!cityName) return;

    try {
      setStatus("loading");
      setError("");

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          cityName
      )}&appid=${apiKey}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();

      if (!res.ok || data.cod !== 200) {
        throw new Error(data.message || "No result found. Try another city name.");
      }

      setWeather(data);
      setStatus("success");
      setCity(cityName);
    } catch (err) {
      setStatus("error");
      setWeather(null);
      setError(err.message || "An error occurred.");
    }
  };

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (newCity) => {
    fetchWeather(newCity);
  };

  return (
      <div className="app-root">
        <div className="app-overlay">
          <header className="app-header">
            <h1 className="app-title">Weather Forecast</h1>
            <p className="app-subtitle">
              Enter a city name to see real-time conditions.
            </p>
          </header>

          <SearchBar onSearch={handleSearch} isLoading={status === "loading"} />

          {status === "error" && (
              <div className="error-banner">
                <span>{error}</span>
              </div>
          )}

          {status === "loading" && (
              <div className="loading-text">Loading weather...</div>
          )}

          {weather && status === "success" && (
              <WeatherCard city={city} weather={weather} />
          )}

          {!weather && status === "idle" && (
              <p className="hint-text">
                Try searching for cities like <strong>Toronto</strong>,{" "}
                <strong>Montreal</strong>, or <strong>Miami</strong>.
              </p>
          )}
        </div>
      </div>
  );
}

export default App;