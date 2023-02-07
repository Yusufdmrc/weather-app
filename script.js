const url = "https://api.openweathermap.org/data/2.5/";
const key = "56c2c87193e1777c4ddb53b6736a335a";

const inputCity = document.getElementById("city-input");

const setQuery = (e) => {
  if (e.keyCode === 13) getWeather(inputCity.value);
};

const getWeather = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayWeather);
};

const displayWeather = (weather) => {
  console.log(weather);
  console.log(weather);
  let city = document.querySelector(".city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(weather.main.temp)}°C`;

  let felt = document.querySelector(".felt");
  felt.innerText = `Temperature felt: ${Math.round(weather.main.feels_like)}°C`;

  let description = document.querySelector(".description");
  description.innerText = `${
    weather.weather[0].description[0].toUpperCase() +
    weather.weather[0].description.substring(1)
  }`;
};

inputCity.addEventListener("keypress", setQuery);
