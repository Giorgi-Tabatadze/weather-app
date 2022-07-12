import "./styles.css";
import getWeatherInfo from "./getWeatherAPI";
import filter from "./filterData";

const input = document.querySelector("input");
const submit = document.querySelector("button");

submit.addEventListener("click", async () => {
  const weatherInfo = await getWeatherInfo(input.value);
  console.log(weatherInfo);
  const currentWeather = filter.rightNow(weatherInfo);
  const hourlyForecast = filter.hourlyForecast(
    currentWeather,
    weatherInfo.forecast.list
  );
  const dailyForecast = filter.dailyForecast(
    currentWeather,
    weatherInfo.forecast.list
  );
  console.log(currentWeather);
  console.log(hourlyForecast);
  console.log(dailyForecast);
});
