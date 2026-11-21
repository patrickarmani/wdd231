
 // SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town');
const myWeatherDescription = document.querySelector('#weather-description');
const myTemperature = document.querySelector('#temperature');
const myWeatherIcon = document.querySelector('#weather-icon');

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "81b436ab0e12c0da53fe9f1431cd6706";
const myLat = "-19.9220931930543";
const myLong = "-43.939605344529106";

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

// TRY TO GRAB THE CURRENT WEATHER DATA
async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data) {
    console.log('hello')
    myTown.innerHTML = data.name
    myWeatherDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;C`

    const weatherIcon = data.weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    myWeatherIcon.src = weatherIconUrl;
    myWeatherIcon.hidden = false;
}

// START THE PROCESS
apiFetch();
