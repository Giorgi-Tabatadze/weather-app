import toLocationTime from "./util/timezone";

const filter = (() => {
  const rightNow = (weatherInfo) => {
    try {
      const currentWeatherData = {
        locationName: weatherInfo.rightNow.name,
        temperature: weatherInfo.rightNow.main.temp,
        weather: weatherInfo.rightNow.weather[0].main,
        description: weatherInfo.rightNow.weather[0].description,
        currentTime: toLocationTime(
          weatherInfo.rightNow.dt,
          weatherInfo.rightNow.timezone,
          "yyyy-MM-dd HH:mm:ss"
        ),
        currentTimeUnix: weatherInfo.rightNow.dt,
        timezone: weatherInfo.rightNow.timezone,
      };
      return currentWeatherData;
    } catch (error) {
      alert("Could not Find Requested City");
    }
  };

  const hourlyForecast = (currentWeather, weatherInfoList) => {
    const hourlyForecastData = [];
    const currentDate = toLocationTime(
      currentWeather.currentTimeUnix,
      currentWeather.timezone,
      "yyyy-MM-dd"
    );

    weatherInfoList.forEach((hourlyData) => {
      const forecastDate = toLocationTime(
        hourlyData.dt,
        currentWeather.timezone,
        "yyyy-MM-dd"
      );
      let forecastTime = null;
      if (currentDate === forecastDate) {
        forecastTime = `Today ${toLocationTime(
          hourlyData.dt,
          currentWeather.timezone,
          "HH"
        )}:00`;
      } else {
        forecastTime = `${toLocationTime(
          hourlyData.dt,
          currentWeather.timezone,
          "EEEE HH:mm"
        )}`;
      }

      const filteredHour = {
        time: forecastTime,
        temperature: hourlyData.main.temp,
        weather: hourlyData.weather[0].main,
        description: hourlyData.weather[0].description,
      };

      hourlyForecastData.push(filteredHour);
    });

    return hourlyForecastData;
  };

  // const dailyForecast = (currentWeather, weatherInfoList) => {
  //   const dailyForecastData = [];
  //   const currentDate = toLocationTime(
  //     currentWeather.currentTimeUnix,
  //     currentWeather.timezone,
  //     "yyyy-MM-dd"
  //   );
  //   weatherInfoList.forEach((hourlyData) => {
  //     const forecastDate = toLocationTime(
  //       hourlyData.dt,
  //       currentWeather.timezone,
  //       "yyyy-MM-dd"
  //     );
  //     if (currentDate !== forecastDate) {
  //       const filteredDay = {
  //         dayOftheWeek: toLocationTime(
  //           hourlyData.dt,
  //           currentWeather.timezone,
  //           "EEEE"
  //         ),
  //         temperature: hourlyData.main.temp,
  //         description: hourlyData.weather[0].description,
  //       };
  //       dailyForecastData.push(filteredDay);
  //     }
  //   });

  //   return dailyForecastData;
  // };

  return { rightNow, hourlyForecast };
})();

export default filter;
