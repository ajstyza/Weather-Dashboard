
var searchButton = document.getElementById('search-btn');
/*
function getApi() {
var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={cityname}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab';

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
console.log(data)

})
};
*/
function searchState(e) {
  e.preventDefault();
var search = document.getElementById('city-search').value.trim(); //gets city string from input
var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q={search}&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab`;
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

searchButton.addEventListener('click', searchState());

  /*
var UrlString = 'http://api.openweathermap.org/geo/1.0/direct?q=SanDiego&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab';
var stateNameAndId = UrlString.split('?q=')[1]; // makes an array from split that yeilds state+
var Id = stateNameAndId.split('&')[1]; // splits state from Id and puts Id in an array
var stateName = stateNameAndId.split('&')[0]; // splits state state
*/