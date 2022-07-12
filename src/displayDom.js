import removeAllChildNodes from "./util/removeallchildnodes";

const display = (() => {
  const currentContainer = document.getElementById("current");
  const forecastContainer = document.querySelector(".forecasts");

  const currentWeather = (weatherInfo) => {
    removeAllChildNodes(currentContainer);

    const cityName = document.createElement("h3");
    cityName.innerText = weatherInfo.locationName;
    currentContainer.appendChild(cityName);

    const temperature = document.createElement("h3");
    temperature.innerText = `${Math.ceil(weatherInfo.temperature)}°`;
    currentContainer.appendChild(temperature);

    const weatherDescription = document.createElement("p");
    weatherDescription.innerText = weatherInfo.description;
    currentContainer.appendChild(weatherDescription);
  };

  const forecastWeather = (forecastInfo) => {
    removeAllChildNodes(forecastContainer);

    forecastInfo.forEach((hourlyForecast) => {
      // split weekdays from hours
      const time = hourlyForecast.time.split(" ");

      // work with dom

      const hourDiv = document.createElement("div");
      forecastContainer.appendChild(hourDiv);

      const weekday = document.createElement("h3");
      weekday.innerText = time[0];
      hourDiv.appendChild(weekday);

      const hour = document.createElement("h4");
      hour.innerText = time[1];
      hourDiv.appendChild(hour);

      const weather = document.createElement("p");
      weather.innerText = hourlyForecast.weather;
      hourDiv.appendChild(weather);

      const temperature = document.createElement("h3");
      temperature.innerText = `${Math.ceil(hourlyForecast.temperature)}°`;
      hourDiv.appendChild(temperature);
    });
  };

  return { currentWeather, forecastWeather };
})();

export default display;
