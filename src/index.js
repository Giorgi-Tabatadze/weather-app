import "./styles.css";
import getWeatherInfo from "./getWeatherAPI";
import filter from "./filterData";
import display from "./displayDom";
import setIcon from "./setIcon";

const input = document.querySelector("input#city");
const submit = document.querySelector("button");
const image = document.querySelector("img");

submit.addEventListener("click", async () => {
  const weatherInfo = await getWeatherInfo(input.value);
  console.log(weatherInfo);
  const currentWeather = filter.rightNow(weatherInfo);
  const hourlyForecast = filter.hourlyForecast(
    currentWeather,
    weatherInfo.forecast.list
  );

  display.currentWeather(currentWeather);
  display.forecastWeather(hourlyForecast);

  console.log(currentWeather);
  console.log(hourlyForecast);
});
