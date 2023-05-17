

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
        console.log(data)

       displayWeather(data);
       storeHistory(data);
      generateButton(data);
        
    })
};
/*
// forLoop to display weather (cannot get arrays to separate easily into days)

   function displayWeather(data){
    for(let i = 0; i < data.list.length; i+=8) {
    const days = data.list[i];
    var windSpeed = days.wind.speed;
    var temperature = days.main.temp;
    var humidity = days.main.humidity;
    console.log(windSpeed, temperature, humidity);
    
    var windEl = document.createElement("p");
    windEl.textContent = windSpeed;
        document.getElementById('box1').append(windEl);
    var tempEl = document.createElement("p");
    tempEl.textContent = temperature;
         document.getElementById('box2').append(tempEl);
    var humEl = document.createElement("p");
    humEl.textContent = humidity;
        document.getElementById('box3').append(humEl);
    }
};
*/

// function to display 5-day weather forecast

function displayWeather(data){
    var date1 = data.list[0].dt_txt;
        document.createElement("li");
            document.getElementById('date1').append(date1);
            

    var windSpeedDay1 = data.list[0].wind.speed;
        document.createElement("li");
            document.getElementById('wind1').append(windSpeedDay1 + " MPH");

    var kelvin = data.list[0].main.temp;
        let temperatureDay1 = ((kelvin - 273.15) * 9/5+32);
        temperatureDay1 = Math.floor(temperatureDay1);
            document.createElement("li");
             document.getElementById('temp1').append(temperatureDay1 + " °F");


    var humidityDay1 = data.list[0].main.humidity;
        document.createElement("li");
            document.getElementById('humid1').append(humidityDay1 + " %");

            ////////////////////// day 2 weather
     var date2 = data.list[8].dt_txt;
            document.createElement("li");
                document.getElementById('date2').append(date2);
    

    var windSpeedDay2 = data.list[8].wind.speed;
            document.createElement("li");
                document.getElementById('wind2').append(windSpeedDay2 + " MPH");
    
    let kelvin2 = data.list[8].main.temp;
        let temperatureDay2 = ((kelvin2 - 273.15) * 9/5+32);
        temperatureDay2 = Math.floor(temperatureDay2);
            document.createElement("li");
                 document.getElementById('temp2').append(temperatureDay2 + " °F");
    
    
    var humidityDay2 = data.list[8].main.humidity;
            document.createElement("li");
                document.getElementById('humid2').append(humidityDay2 + " %");

                 ////////////////////// day 3 weather

    var date3 = data.list[16].dt_txt;
            document.createElement("li");
                document.getElementById('date3').append(date3);
         
    var windSpeedDay3 = data.list[16].wind.speed;
             document.createElement("li");
                 document.getElementById('wind3').append(windSpeedDay3 + " MPH");

    var kelvin3 = data.list[16].main.temp;
        let temperatureDay3 = ((kelvin3 - 273.15) * 9/5+32);
        temperatureDay3 = Math.floor(temperatureDay3);
            document.createElement("li");
                document.getElementById('temp3').append(temperatureDay3 + " °F");


    var humidityDay3 = data.list[16].main.humidity;
            document.createElement("li");
                document.getElementById('humid3').append(humidityDay3 + " %");
    
            ////////////////////// day 4 weather

    var date4 = data.list[24].dt_txt;
            document.createElement("li");
                document.getElementById('date4').append(date4);
    

    var windSpeedDay4 = data.list[24].wind.speed;
            document.createElement("li");
                document.getElementById('wind4').append(windSpeedDay4 + " MPH");

    var kelvin4 = data.list[24].main.temp;
        let temperatureDay4 = ((kelvin4 - 273.15) * 9/5+32);
        temperatureDay4 = Math.floor(temperatureDay4);
            document.createElement("li");
                document.getElementById('temp4').append(temperatureDay4 + " °F");

    var humidityDay4 = data.list[24].main.humidity;
            document.createElement("li");
                document.getElementById('humid4').append(humidityDay4 + " %");
    
            ////////////////////// day 5 weather
    var date5 = data.list[32].dt_txt;
            document.createElement("li");
                document.getElementById('date5').append(date5);
    

    var windSpeedDay5 = data.list[32].wind.speed;
            document.createElement("li");
                document.getElementById('wind5').append(windSpeedDay5 + " MPH");

    var kelvin5 = data.list[32].main.temp;
        let temperatureDay5 = ((kelvin5 - 273.15) * 9/5+32);
        temperatureDay5 = Math.floor(temperatureDay5);
            document.createElement("li");
                 document.getElementById('temp5').append(temperatureDay5 + " °F");


    var humidityDay5 = data.list[32].main.humidity;
            document.createElement("li");
                document.getElementById('humid5').append(humidityDay5 + " %");

    
};



// checks local storage to see if city exist in array, if not it pushes it into a new array
function  storeHistory(data){
    var storedItem = JSON.parse(localStorage.getItem("cityArr")) || [];
    // var cityArr = [""];
    var cityName = data.city.name;
    if (!storedItem.includes(cityName)){
        storedItem.push(cityName);
        localStorage.setItem("cityArr", JSON.stringify(storedItem));
    }
};

//function to dynamically create buttons
function generateButton(data) {
let cityName = data.city.name;
let buttonTarget = document.getElementById('search-container');
const btn = document.createElement('button');
btn.innerHTML = cityName;
buttonTarget.append(cityName);
};


searchButton.addEventListener('click', searchState);

// includes() method prevents duplication in localStorage, returning true or false value;
// || or operators can be used outside of conditional logic


