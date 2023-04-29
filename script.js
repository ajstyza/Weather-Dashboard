

var searchButton = document.getElementById('search-btn');

function searchState(e) {
    e.preventDefault()
var search = document.getElementById('city-search').value.trim(); //gets city string from input
var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            getWeather(data)
        
        })
        };

function getWeather(data) {
var lat = data[0].lat;
var lon = data[0].lon;    
var LatLonUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;

fetch(LatLonUrl)
.then(function (response) {
    return response.json();
})
    .then(function(data) {

    console.log(data);
    displayWeather(data);
})
};
// function to return
function displayWeather(data){
    var windSpeed = data.list[0].main.wind;
    var temperature = data.list[0].main.temp;
    var humidity = data.list[0].main.humidity;
    var weatherDescritpion = document.getElementById('box1').textContent;


    console.log(windSpeed, temperature, humidity);
    // 
};

searchButton.addEventListener('click', searchState);

