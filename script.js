
var searchButton = document.getElementById('search-btn');
function searchState(e) {
  e.preventDefault();
var search = document.getElementById('city-search').value.trim(); //gets city string from input
var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;
// var cityKeyArray = requestUrl.split(`q=`)[1];
// var newUrl = requestUrl.replace(cityKeyArray, search + `&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`).trim();

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
console.log(data)

})
}

searchButton.addEventListener('click', searchState);
//var data = 
var lat = data.lat;
var lon = data.lon;

function getWeather() {
    
var LatLonUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;
fetch(LatLonUrl)
.then(function (response) {
    return response.json();
})
.then(function (lat, lon) {

console.log(lat, lon)

})
};