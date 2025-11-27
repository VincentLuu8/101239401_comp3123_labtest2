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

## Screenshots

### Home screen
<img width="1717" height="1026" alt="Local1" src="https://github.com/user-attachments/assets/7b6d3fd8-d6b0-46ce-b490-4a308c5fa7a5" />

Default view showing information pulled from the api using a default city.

### Search feature
<img width="1722" height="1033" alt="local2" src="https://github.com/user-attachments/assets/972b8496-0919-4ce4-87a1-04e78138266a" />

Showing a new city with relevant information after searching up "Chicago".

### Error message
<img width="1722" height="1032" alt="local3" src="https://github.com/user-attachments/assets/36bacf0c-6b68-4f4d-9725-0e6f14404417" />

Error message after typing an invalid/mispelled city.

### Vercel App running
<img width="1681" height="1028" alt="vercel1" src="https://github.com/user-attachments/assets/435f90a7-d31f-4d88-b09a-d118fad66e8c" />

Default homepage running on my deployed Vercel App.

### Postman GET #1
<img width="1349" height="986" alt="Postman-GETTORONTO" src="https://github.com/user-attachments/assets/4a332711-1142-4a38-ae61-5ede92e3330c" />

Postman GET call showing the default Toronto page information.

### Postman GET #2
<img width="1316" height="905" alt="postman-GETVANC" src="https://github.com/user-attachments/assets/89905f74-28fd-40c2-a5e1-e5a364886f07" />

Postman GET call showing a different city "Vancouver" and its relevant information.

### Github Repo
<img width="1721" height="1028" alt="githubrepo" src="https://github.com/user-attachments/assets/28f57f0a-1443-485e-8039-8cd5e50039b8" />

Screenshot of the current repo.




