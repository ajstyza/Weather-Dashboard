
var searchButton = document.getElementById('search-btn');
function searchState(e) {
  e.preventDefault();
var search = document.getElementById('city-search').value.trim(); //gets city string from input
var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;




fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)

})
};
   
    
searchButton.addEventListener('click', searchState);

var lat = data[0].lat.trim();
var lon = data[0].lon.trim();

function getWeather(e) {
    e.preventDefault();
var LatLonUrl = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;
fetch(LatLonUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
})
};