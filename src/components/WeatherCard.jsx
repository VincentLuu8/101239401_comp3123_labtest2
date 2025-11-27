import React from "react";
import WeatherDetails from "./WeatherDetails";

function WeatherCard({ city, weather }) {
    const {
        main,
        weather: weatherArr,
        sys,
        wind,
        dt,
        name,
    } = weather;

    const condition = weatherArr[0];
    const iconCode = condition.icon; // e.g. "01n"
    const isNight = iconCode.endsWith("n");

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const date = new Date(dt * 1000);
    const formattedDate = date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <section className={`weather-card ${isNight ? "night" : "day"}`}>
            <div className="weather-main">
                <div>
                    <p className="weather-day">{formattedDate}</p>
                    <p className="weather-location">
                        {name || city}, {sys?.country}
                    </p>
                    <p className="weather-desc">{condition.description}</p>
                </div>

                <div className="weather-temp-block">
                    <img src={iconUrl} alt={condition.main} className="weather-icon" />
                    <div>
                        <p className="weather-temp">
                            {Math.round(main.temp)}
                            <span className="weather-unit">°C</span>
                        </p>
                        <p className="weather-feels">
                            Feels like {Math.round(main.feels_like)}°C
                        </p>
                    </div>
                </div>
            </div>

            <WeatherDetails main={main} wind={wind} sys={sys} />
        </section>
    );
}

export default WeatherCard;