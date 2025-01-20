
const apiKey = "a1dada3607718f2783b022979e7f7003";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";


const locationInput = document.getElementById("locationInput");
const searchButton = document.getElementById("searchButton");
const locationElement = document.getElementById("location");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const feelsLike= document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");


searchButton.addEventListener("click",()=>{
    const locationValue = locationInput.value;
    if(locationValue){
        fetchWeather(locationValue);
    }
    locationInput.value = "";
});


async function fetchWeather(locationValue) {
   try{
    const url = `${apiUrl}?q=${locationValue}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
     locationElement.textContent = data.name;
     temperature.textContent = `${Math.round(data.main.temp)}°c`;
    feelsLike.textContent = `Feels like ${Math.round(data.main.feels_like)}°c`;
    humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
    windElement.textContent = `Wind: ${data.wind.speed}m/s`;
     description.textContent = data.weather[0].description.toUpperCase();
   }catch(err){
    alert("Your location is not found");
   }



}