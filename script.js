
var searchButton = document.getElementById('search-btn');
function getApi() {
var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=5f86b2ad02bbbf3c5d9ce42a08c633ab';

fetch(requestUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
console.log(data)

})
};

searchButton.addEventListener('click', getApi);