import { getWeatherDataForCity } from './api/TemperatureApi';
import { renderWeatherCard } from './RednderDomFunctions';

let data;
let city = 'Cluj-Napoca';
let units = 'metric';

let toggle = document.getElementById('toggle');
const searchInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');

async function fetchData(city, units) {
  try {
    data = await getWeatherDataForCity(city, units);
    renderWeatherCard(data, units);
  } catch (reason) {
    if (reason.response.status === 400) {
      alert('Please provide a city');
    } else {
      if (reason.response.status === 404) alert('City not found');
    }
  }
}

toggle.addEventListener('change', () => {
  units = !toggle.checked ? 'metric' : 'imperial';
  fetchData(city, units);
});

searchButton.addEventListener('click', () => {
  city = searchInput.value;
  searchInput.value = '';
  fetchData(city, units);
});

fetchData(city, units);
