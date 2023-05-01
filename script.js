

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
    var windSpeed = data.list[0].wind.speed;
    var temperature = data.list[0].main.temp;
    var humidity = data.list[0].main.humidity;
    document.getElementById('box1').textContent = windSpeed;
    document.getElementById('box2').textContent = temperature;
    document.getElementById('box3').textContent = humidity;

  for (let i = 0; i < data.list.length; i+=8) {
    const day = data.list[i];
    var windSpeed = data.wind.speed;
    var temperture = 
  }
    }

    //create windEl = document.createElement("p")
   // windEl.textContent = windSpeed;
    // document.getElementById('box1').append(windEl);
    // append to box1
    


    console.log(windSpeed, temperature, humidity);
    
};

searchButton.addEventListener('click', searchState);



//change kelvin to "imperial" to get temperture correct.

