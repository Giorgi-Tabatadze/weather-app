async function getWeatherInfo(city) {
  try {
    const rightNowRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2715a973905d7afe27097dee25101fd&units=metric`
    );
    const forecastRequest = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=a2715a973905d7afe27097dee25101fd&units=metric`
    );

    const rightNow = await rightNowRequest.json();
    const forecast = await forecastRequest.json();
    const weatherData = { rightNow, forecast };
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}

export default getWeatherInfo;
