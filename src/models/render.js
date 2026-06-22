import { getData } from "./controls.js";
import { icons } from "./icon-render.js";

const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let query = searchInput.value;
  renderData(query);
});

let renderData = async function (city) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  const infoCard = document.getElementById("info");
  infoCard.style.display = "block";
  infoCard.innerHTML = "<span>Loading...</span>";

  const data = await getData(city);
  infoCard.textContent = "";

  const infoContainer = document.createElement("ul");

  const otherTemps = document.createElement("li");
  otherTemps.id = "other-temps";
  const feelsLikeInfo = document.createElement("div");
  feelsLikeInfo.id = "feels-like";
  feelsLikeInfo.textContent = `Feels like ${data.feelsLikeTempCelsius}`;
  otherTemps.appendChild(feelsLikeInfo);
  const minmaxTemps = document.createElement("div");
  minmaxTemps.id = "minmax-temp";
  const maxTempInfo = document.createElement("p");
  maxTempInfo.textContent = `Max. ${data.maxTempCelsius}`;
  minmaxTemps.appendChild(maxTempInfo);
  const minTempInfo = document.createElement("p");
  minTempInfo.textContent = `Min. ${data.minTempCelsius}`;
  minmaxTemps.appendChild(minTempInfo);
  otherTemps.appendChild(minmaxTemps);
  infoContainer.appendChild(otherTemps);

  const infoHead = document.createElement("li");
  infoHead.id = "info-head";
  const cityTitle = document.createElement("p");
  cityTitle.id = "city-title";
  cityTitle.textContent = cityName;
  infoHead.appendChild(cityTitle);
  const tempInfo = document.createElement("p");
  tempInfo.id = "temp";
  tempInfo.textContent = data.currentTempCelsius;
  infoHead.appendChild(tempInfo);
  infoContainer.appendChild(infoHead);

  const otherInfo = document.createElement("li");
  otherInfo.id = "other-info";
  const conditionInfo = document.createElement("p");
  conditionInfo.id = "condition";
  conditionInfo.textContent = data.conditions;
  otherInfo.append(conditionInfo);
  const img = document.createElement("img");
  img.src = icons[data.icon];
  otherInfo.append(img);
  infoContainer.appendChild(otherInfo);

  const humidityInfo = document.createElement("li");
  humidityInfo.textContent = `Humidity: ${data.humidity}%`;
  infoContainer.appendChild(humidityInfo);

  const sunTimeInfo = document.createElement("li");
  sunTimeInfo.id = "sun-time";
  const sunriseInfo = document.createElement("p");
  sunriseInfo.textContent = `Sunrise: ${data.sunrise}`;
  sunTimeInfo.append(sunriseInfo);
  const sunsetInfo = document.createElement("p");
  sunsetInfo.textContent = `Sunset: ${data.sunset}`;
  sunTimeInfo.append(sunsetInfo);
  infoContainer.appendChild(sunTimeInfo);

  infoCard.append(infoContainer);
};
