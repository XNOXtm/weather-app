export async function getData(city) {
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JFCUF9KXF852RCXHFKG2THHRC`,
  );
  let weatherData = await response.json();
  //   console.log(weatherData.currentConditions.icon);

  console.log(city + ":");
  let currentTemp = await weatherData.currentConditions.temp;
  console.log("Current Temp: " + convertToCelsius(currentTemp));
  let maxTemp = await weatherData.days[0].tempmax;
  console.log("Max. Temp: " + convertToCelsius(maxTemp));
  let minTemp = await weatherData.days[0].tempmin;
  console.log("Min. Temp: " + convertToCelsius(minTemp));
  let feelsLikeTemp = await weatherData.days[0].feelslike;
  console.log("Feels Like: " + convertToCelsius(feelsLikeTemp));
  console.log(
    "Humidity: " + Math.round(weatherData.currentConditions.humidity) + "%",
  );
  console.log("Conditions: " + weatherData.currentConditions.conditions);
  console.log("Sunrise: " + weatherData.currentConditions.sunrise);
  console.log("Sunset: " + weatherData.currentConditions.sunset);
}

function convertToCelsius(temp) {
  const a = temp - 32;
  const b = 5 / 9;
  const celsius = Math.round(a * b);
  return celsius + " °C";
}

// getData("nagpur");
