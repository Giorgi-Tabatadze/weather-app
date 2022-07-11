import "./styles.css";

const input = document.querySelector("input");
const submit = document.querySelector("button");

submit.addEventListener("click", () => {
  getWeatherInfo(input.value);
});

async function getWeatherInfo(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2715a973905d7afe27097dee25101fd`
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
  } catch (error) {
    console.log(error);
  }
}
