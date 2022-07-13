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

// https://openweathermap.org/weather-conditions

const setIcon = (() => {
  const source = (image, hourlyForecast) => {
    const time = hourlyForecast.time.split(" ");

    // daytime
    if (time[1] >= "07:00" && time[1] < "22:00") {
      switch (hourlyForecast.description) {
        case "clear sky":
          image.src = d01;
          break;
        case "few clouds" || "overcast clouds":
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
            image.src = d02;
          } else if (hourlyForecast.description.includes("drizzle")) {
            image.src = d09;
          } else if (hourlyForecast.description.includes("thunderstorm")) {
            image.src = d11;
          } else if (hourlyForecast.description.includes("rain")) {
            image.src = d10;
          } else if (hourlyForecast.description.includes("snow")) {
            image.src = d13;
          } else console.log(`Couldnt set icon for ${hourlyForecast.time}`);
      }
    } else {
      switch (hourlyForecast.description) {
        case "clear sky":
          image.src = n01;
          break;
        case "few clouds" || "overcast clouds":
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
            image.src = n02;
          } else if (hourlyForecast.description.includes("drizzle")) {
            image.src = n09;
          } else if (hourlyForecast.description.includes("thunderstorm")) {
            image.src = n11;
          } else if (hourlyForecast.description.includes("rain")) {
            image.src = n10;
          } else if (hourlyForecast.description.includes("snow")) {
            image.src = n13;
          } else console.log(`Couldnt set icon for ${hourlyForecast.time}`);
      }
    }
  };
  return { source };
})();

export default setIcon;
