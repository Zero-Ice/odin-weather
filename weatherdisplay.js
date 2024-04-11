const currentWeatherDiv = document.querySelector('.current-weather');
const forecastWeatherDiv = document.querySelector('.forecast-weather');

function getWeatherCard(temp, isCelcius, conditionWeatherIcon, date) {
  const div = document.createElement('div');
  div.className = 'weather-card';

  const conditionImg = document.createElement('img');
  conditionImg.src = conditionWeatherIcon;
  div.appendChild(conditionImg);

  const temperatureText = document.createElement('p');
  temperatureText.innerText = `${temp}${isCelcius ? 'C' : 'F'}`;
  div.appendChild(temperatureText);

  if (date) {
    const dateText = document.createElement('p');
    dateText.innerText = date;
    div.appendChild(dateText);
  }

  return div;
}

function displayCurrentWeather(weatherData, isCelcius) {
  currentWeatherDiv.innerHTML = '';

  const wc = getWeatherCard(
    isCelcius ? weatherData.temp_c : weatherData.temp_f,
    isCelcius,
    weatherData.condition.icon,
    weatherData.date
  );

  currentWeatherDiv.appendChild(wc);
}

function displayForecastedWeather(weatherData, isCelcius) {
  forecastWeatherDiv.innerHTML = '';

  for (const f of weatherData) {
    const wc = getWeatherCard(
      isCelcius ? f.day.avgtemp_c : f.day.avgtemp_f,
      isCelcius,
      f.day.condition.icon,
      f.date
    );

    forecastWeatherDiv.appendChild(wc);
  }
}

export { displayCurrentWeather, displayForecastedWeather };
