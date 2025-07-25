//openweathermap - weather api
const formElement = document.getElementById("weatehrForm");
const inputElement = document.getElementById("inputCity");
const data = document.getElementById("weatherData");

const clearBtn = document.getElementById('clear')
//!You need to provide your own API-KEY
const apiKey = "API-KEY";

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const city = inputElement.value.trim(); 
  const valueInput = inputElement.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
      const temp = data.main.temp;
      const tempMin = data.main.temp_min;
      const tempMax = data.main.temp_max;
      const timeZone = data.timezone;
      const lon = data.coord.lon;
      const lat = data.coord.lat;
      const windSpeed = data.wind.speed;
      displayElement(valueInput,temp, tempMin, tempMax, timeZone, lon, lat, windSpeed);
    })
    .catch((err) => {
      console.log("Error :", err);
    });
     inputElement.value = "";
});

//TODO Needs styles
function displayElement(valueInput,temp, tempMin, tempMax, timeZone, lon, lat, windSpeed) {
  data.innerHTML = `
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md" > City : ${valueInput}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md" > Temperature : ${temp}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md">  Min temperature : ${tempMin}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md">  Max teperature : ${tempMax}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md">  Timezone : ${timeZone}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md">  Lon : ${lon}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md">  Lat : ${lat}</p>
  <p class = "mt-2  text-xl bg-lime-200 text-white-100 rounded-md">  Wind Speed: ${windSpeed}  </p>
  `;  
 
}

clearBtn.addEventListener("click", (e) => {
  e.preventDefault()  
  data.textContent = "";
})