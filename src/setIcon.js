import d01 from "./img/icons/day/01d@2x.png";
import d02 from "./img/icons/day/02d@2x.png";
import d03 from "./img/icons/day/03d@2x.png";
import d04 from "./img/icons/day/04d@2x.png";
import d09 from "./img/icons/day/09d@2x.png";
import d10 from "./img/icons/day/10d@2x.png";
import d11 from "./img/icons/day/11d@2x.png";
import d13 from "./img/icons/day/13d@2x.png";
import d50 from "./img/icons/day/50d@2x.png";

import n01 from "./img/icons/night/01n@2x.png";
import n02 from "./img/icons/night/02n@2x.png";
import n03 from "./img/icons/night/03n@2x.png";
import n04 from "./img/icons/night/04n@2x.png";
import n09 from "./img/icons/night/09n@2x.png";
import n10 from "./img/icons/night/10n@2x.png";
import n11 from "./img/icons/night/11n@2x.png";
import n13 from "./img/icons/night/13n@2x.png";
import n50 from "./img/icons/night/50n@2x.png";

import dclear from "./img/backgrounds/day/clearsky.jpg";
import dfewclouds from "./img/backgrounds/day/fewclouds.jpg";
import nclear from "./img/backgrounds/night/clearsky.jpg";
import nfewclouds from "./img/backgrounds/night/fewclouds.jpg";

import clouds from "./img/backgrounds/clouds.jpg";
import mist from "./img/backgrounds/mist.jpg";
import rain from "./img/backgrounds/rain.jpg";
import thunderstorm from "./img/backgrounds/thunderstorm.jpg";
import snow from "./img/backgrounds/snow.jpg";

// https://openweathermap.org/weather-conditions

const setImage = (() => {
  const icon = (image, hourlyForecast) => {
    const time = hourlyForecast.time.split(" ");

    // daytime
    if (time[1] >= "07:00" && time[1] < "22:00") {
      switch (hourlyForecast.description) {
        case "clear sky":
          image.src = d01;
          break;
        case "few clouds":
          image.src = d02;
          break;
        case "scattered clouds":
          image.src = d03;
          break;
        case "broken clouds":
          image.src = d04;
          break;
        case "shower rain":
          image.src = d09;
          break;
        case "rain":
          image.src = d10;
          break;
        case "thunderstorm":
          image.src = d11;
          break;
        case "snow":
          image.src = d13;
          break;
        case "mist":
          image.src = d50;
          break;
        default:
          if (hourlyForecast.description.includes("clouds")) {
            image.src = d03;
          } else if (hourlyForecast.description.includes("drizzle")) {
            image.src = d09;
          } else if (hourlyForecast.description.includes("thunderstorm")) {
            image.src = d11;
          } else if (hourlyForecast.description.includes("rain")) {
            image.src = d10;
          } else if (hourlyForecast.description.includes("snow")) {
            image.src = d13;
          } else image.src = d50;
      }
    } else {
      switch (hourlyForecast.description) {
        case "clear sky":
          image.src = n01;
          break;
        case "few clouds":
          image.src = n02;
          break;
        case "scattered clouds":
          image.src = n03;
          break;
        case "broken clouds":
          image.src = n04;
          break;
        case "shower rain":
          image.src = n09;
          break;
        case "rain":
          image.src = n10;
          break;
        case "thunderstorm":
          image.src = n11;
          break;
        case "snow":
          image.src = n13;
          break;
        case "mist":
          image.src = n50;
          break;
        default:
          if (hourlyForecast.description.includes("clouds")) {
            image.src = n03;
          } else if (hourlyForecast.description.includes("drizzle")) {
            image.src = n09;
          } else if (hourlyForecast.description.includes("thunderstorm")) {
            image.src = n11;
          } else if (hourlyForecast.description.includes("rain")) {
            image.src = n10;
          } else if (hourlyForecast.description.includes("snow")) {
            image.src = n13;
          } else image.src = n50;
      }
    }
  };

  const background = (currentWeatherData) => {
    const time = currentWeatherData.currentTime.split(" ");
    const body = document.querySelector("body");
    const daytime = time[1] >= "07:00:00" && time[1] < "22:00:00";
    let imageToSet = null;

    if (currentWeatherData.weather === "Clear") {
      if (daytime) {
        imageToSet = dclear;
      } else imageToSet = nclear;
    } else if (currentWeatherData.weather === "Clouds") {
      if (
        currentWeatherData.description === "few clouds" ||
        currentWeatherData.description === "scattered clouds"
      ) {
        if (daytime) {
          imageToSet = dfewclouds;
        } else imageToSet = nfewclouds;
      } else {
        imageToSet = clouds;
      }
    } else if (
      currentWeatherData.weather === "Rain" ||
      currentWeatherData.weather === "Drizzle"
    ) {
      imageToSet = rain;
    } else if (currentWeatherData.weather === "Thunderstorm") {
      imageToSet = thunderstorm;
    } else if (currentWeatherData.weather === "Snow") {
      imageToSet = snow;
    } else {
      imageToSet = mist;
    }
    body.style.backgroundImage = `url(${imageToSet})`;
  };

  return { icon, background };
})();

export default setImage;
