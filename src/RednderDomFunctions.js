import Cloud from "./assets/cloud.svg";
import Sun from "./assets/sun.svg";
import Rain from "./assets/cloud-rain.svg";

const templateHTML = `<div class='weather-main-info'>
<img id="weather-image" style='height: 64px;' alt="dfsa">
<div class='wather-info'>
  <p id='info-temperature'></p>
  <p id='info-location'></p>
</div>
</div>
<div class='weather-extra-info'>
<div class='extra-info-container'>
  <label for="feels-like">Feels-like:</label>
  <p id='feels-like'></p>
</div>
<div class='extra-info-container'>
  <label for="humidity">Humidity:</label>
  <p id='humidity'></p>
</div>
<div class='extra-info-container'>
  <label for="pressure">Pressure:</label>
  <p id='pressure'></p>
</div>
<div class='extra-info-container'>
  <label for="min-temperature">Min:</label>
  <p id='min-temperature'></p>
</div>
<div class='extra-info-container'>
  <label for="max-temperature">Max:</label>
  <p id='max-temperature'></p>
</div>
</div>`;

let weatherImage;
let temperature;
let location;
let feelsLike;
let minTemperature;
let maxTemperature;
let humidity;
let pressure;
const weatherCard = document.getElementById("weather-card");

function setImage(data) {
  const conditions = data.weather[0].main.toLowerCase();
  if (conditions.includes("cloud")) {
    weatherImage.src = Cloud;
    return;
  }
  if (conditions.includes("clear")) {
    weatherImage.src = Sun;
    return;
  }
  if (conditions.includes("rain")) {
    weatherImage.src = Rain;
    return;
  }
  weatherImage.src = Cloud;
}

function getUnit(units) {
  return units === "metric" ? " °C" : " °F";
}

export default function renderWeatherCard(data, units) {
  weatherCard.innerHTML = templateHTML;
  temperature = document.getElementById("info-temperature");
  location = document.getElementById("info-location");
  feelsLike = document.getElementById("feels-like");
  minTemperature = document.getElementById("min-temperature");
  maxTemperature = document.getElementById("max-temperature");
  humidity = document.getElementById("humidity");
  pressure = document.getElementById("pressure");
  weatherImage = document.getElementById("weather-image");

  temperature.innerHTML = data.main.temp + getUnit(units);
  location.innerHTML = data.name.toUpperCase();
  feelsLike.innerHTML = data.main.feels_like + getUnit(units);
  minTemperature.innerHTML = data.main.temp_min + getUnit(units);
  maxTemperature.innerHTML = data.main.temp_max + getUnit(units);
  humidity.innerHTML = `${data.main.humidity}%`;
  pressure.innerHTML = `${data.main.pressure}hPa`;
  setImage(data);
}
