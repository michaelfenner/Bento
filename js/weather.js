const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');

// App data
const weather = {};
weather.temperature = {
    unit: 'celsius',
};

// Change to 'F' for Fahrenheit
var tempUnit = 'F';

const KELVIN = 273.15;
// Use your own key for the Weather, Get it here: https://openweathermap.org/
const key = '8bc32ed041a1c8525d9abfabde4dcb89';

// Set Position function
setPosition();

function setPosition(position) {
    // Here you can change your position
    // You can use https://www.latlong.net/ to get it! (I use San Francisco as an example)
    //let latitude = 33.717472;
    //let longitude = -117.831146;

    //getWeather(latitude, longitude);
	
	cityName = "Orange";
	getWeather(cityName);
}

// Get the Weather data
function getWeather(cityName) {
    //let api = "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}";
	let api = "api.openweathermap.org/data/2.5/weather?q=Orange&appid=8bc32ed041a1c8525d9abfabde4dcb89";

    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            let celsius = Math.floor(data.main.temp - KELVIN);
            weather.temperature.value = (tempUnit == 'C') ? celsius : (celsius * 9/5) + 32;
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
        })
        .then(function () {
            displayWeather();
        });
}

// Display Weather info
function displayWeather() {
    iconElement.innerHTML = "<img src="icons/OneDark/${weather.iconId}.png"/>";
    tempElement.innerHTML = "${weather.temperature.value}°<span class="darkfg">${tempUnit}</span>";
    descElement.innerHTML = weather.description;
}
