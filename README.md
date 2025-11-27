# 101239401_comp3123_labtest2 – Weather App

This lab test 2 consists of a simple, user-friendly React app that
shows the current weather for any city.
You can search any city name and see many details including current
temperature, description, min/max temp, etc.


## API

OpenWeatherMap – Current weather endpoint:

`https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric`

The API key is stored in a `.env` file as:

`REACT_APP_WEATHER_API_KEY=...`

## Features

- Search bar to look up any weather by city name
- Information including:
  - City + country
  - Current temp + feels-like
  - Min/max temp
  - Humidity and pressure
  - Wind speed
  - Sunrise and sunset time
  - Weather icon + background image

## How to run

1. Clone the repo:

   ```bash
   git clone https://github.com/<your-username>/101239401_comp3123_labtest2.git
   cd 101239401_comp3123_labtest2
   
2. Install packages:

    ```bash
   npm install

3. Create the .env file in the project root and add the following:

   REACT_APP_WEATHER_API_KEY=YOUR_KEY

4. Start the server:

    ```bash
   npm start
    
## Hosting

This has been deployed onto Vercel:
https://101239401-comp3123-labtest2.vercel.app/