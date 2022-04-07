import axios from 'axios';

export async function getWeatherDataForCity(city, units) {
  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=42ac2a7a976a6a0d509d175d7dabded8`
  );
  return data.data;
}
