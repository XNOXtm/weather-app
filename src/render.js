import { getData } from "./controls.js";

const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let query = searchInput.value;
  renderData(query);
});

let renderData = async function (city) {
  const data = await getData(city);
  console.log(data);

  const infoCard = document.getElementById("info");
};
