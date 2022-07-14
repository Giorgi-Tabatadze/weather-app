import "./styles.css";
import getWeatherInfo from "./getWeatherAPI";
import filter from "./filterData";
import display from "./displayDom";

const input = document.querySelector("input#city");
const submit = document.querySelector("button");
const image = document.querySelector("img");
const body = document.querySelector("body");

async function weatherForecast(city) {
  const weatherInfo = await getWeatherInfo(city);
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
}

submit.addEventListener("click", async () => {
  weatherForecast(input.value);
});

weatherForecast("london");
