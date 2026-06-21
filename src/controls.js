export async function getData(city) {
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=JFCUF9KXF852RCXHFKG2THHRC`,
  );
  let weatherData = await response.json();
  //   console.log(weatherData.currentConditions.icon);

  console.log(city + ":");
  const currentTemp = await weatherData.currentConditions.temp;
  const currentTempCelsius = convertToCelsius(currentTemp);

  const maxTemp = await weatherData.days[0].tempmax;
  const maxTempCelsius = convertToCelsius(maxTemp);

  const minTemp = await weatherData.days[0].tempmin;
  const minTempCelsius = convertToCelsius(minTemp);

  const feelsLikeTemp = await weatherData.days[0].feelslike;
  const feelsLikeTempCelsius = convertToCelsius(feelsLikeTemp);

  const humidity = Math.round(weatherData.currentConditions.humidity);

  const conditions = weatherData.currentConditions.conditions;
  const sunrise = weatherData.currentConditions.sunrise;
  const sunset = weatherData.currentConditions.sunset;

  return {
    currentTempCelsius,
    maxTempCelsius,
    minTempCelsius,
    feelsLikeTempCelsius,
    humidity,
    conditions,
    sunrise,
    sunset,
  };
}

function convertToCelsius(temp) {
  const a = temp - 32;
  const b = 5 / 9;
  const celsius = Math.round(a * b);
  return celsius + " °C";
}

// getData("nagpur");
