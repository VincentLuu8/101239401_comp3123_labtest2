import React from "react";

function WeatherDetails({ main, wind, sys }) {
    const sunrise = sys?.sunrise
        ? new Date(sys.sunrise * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        : "-";

    const sunset = sys?.sunset
        ? new Date(sys.sunset * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        : "-";

    return (
        <div className="weather-details">
            <div className="detail-column">
                <p>
                    <span className="detail-label">Min:</span>{" "}
                    {Math.round(main.temp_min)}°C
                </p>
                <p>
                    <span className="detail-label">Max:</span>{" "}
                    {Math.round(main.temp_max)}°C
                </p>
                <p>
                    <span className="detail-label">Humidity:</span> {main.humidity}%
                </p>
            </div>

            <div className="detail-column">
                <p>
                    <span className="detail-label">Pressure:</span> {main.pressure} hPa
                </p>
                <p>
                    <span className="detail-label">Wind:</span> {wind.speed} m/s
                </p>
                <p>
                    <span className="detail-label">Feels Like:</span>{" "}
                    {Math.round(main.feels_like)}°C
                </p>
            </div>

            <div className="detail-column">
                <p>
                    <span className="detail-label">Sunrise:</span> {sunrise}
                </p>
                <p>
                    <span className="detail-label">Sunset:</span> {sunset}
                </p>
            </div>
        </div>
    );
}

export default WeatherDetails;