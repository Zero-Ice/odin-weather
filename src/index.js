import './style.css';
import {
  displayCurrentWeather,
  displayForecastedWeather,
} from '../weatherdisplay';

// Template

const baseURL = 'http://api.weatherapi.com/v1';
const current = '/current.json';
const forecast = '/forecast.json';

// Dont care if this is exposed
const key = '2853e4e3f237443da0252613241104';
const q = 'Singapore';
const days = '5';

const query = `?key=${key}&q=${q}`;

const currentWeatherUrl = baseURL + current + query;

const forecastWeatherUrl = baseURL + forecast + query + `&days=${days}`;
const response = await fetch(forecastWeatherUrl);
const jsonResponse = await response.json();

displayCurrentWeather(jsonResponse.current, true);
displayForecastedWeather(jsonResponse.forecast.forecastday, true);

console.log(jsonResponse.current);
