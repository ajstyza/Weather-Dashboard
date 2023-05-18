

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


// function to display 5-day weather forecast

function displayWeather(data) {

    weatherContainer.innerHTML = '';
    var date1 = document.createElement("p");
        date1.textContent = "Date: " + data.list[0].dt_txt;
            document.getElementById('weatherContainer').append(date1);

            
   var windSpeedDay1 = document.createElement("p");
        windSpeedDay1.textContent = "Wind Speed: " + data.list[0].wind.speed + " MPH";
            document.getElementById('weatherContainer').append(windSpeedDay1);

  
       var temperatureDay1 = document.createElement("p");
       var kelvin = data.list[8].main.temp; 
        temperatureDay1 = ((kelvin - 273.15) * 9/5+32);
        temperatureDay1 = Math.floor(temperatureDay1);
        temperatureDay1.textContent = temperatureDay1;
             document.getElementById('weatherContainer').append("Temperature: " + temperatureDay1 + " °F");


    var humidityDay1 = document.createElement("p");
        humidityDay1.textContent = "Humidity: " + data.list[0].main.humidity + " %";
            document.getElementById('weatherContainer').append(humidityDay1);

            ////////////////////// day 2 weather

     var date2 = document.createElement("p");
        date2.textContent = "Date: " + data.list[8].dt_txt;
            document.getElementById('weatherContainer').append(date2);

            
   var windSpeedDay2 = document.createElement("p");
        windSpeedDay2.textContent = "Wind Speed: " + data.list[8].wind.speed + " MPH";
            document.getElementById('weatherContainer').append(windSpeedDay2);

  
       var temperatureDay2 = document.createElement("p");
       var kelvin = data.list[8].main.temp; 
        temperatureDay2 = ((kelvin - 273.15) * 9/5+32);
        temperatureDay2 = Math.floor(temperatureDay2);
        temperatureDay2.textContent = temperatureDay2;
             document.getElementById('weatherContainer').append("Temperature: " + temperatureDay2 + " °F");


    var humidityDay2 = document.createElement("p");
        humidityDay2.textContent = "Humidity: " + data.list[8].main.humidity + " %";
            document.getElementById('weatherContainer').append(humidityDay2);


                 ////////////////////// day 3 weather

            var date3 = document.createElement("p");
                 date3.textContent = "Date: " + data.list[16].dt_txt;
                     document.getElementById('weatherContainer').append(date3);
         
                     
            var windSpeedDay3 = document.createElement("p");
                 windSpeedDay3.textContent = "Wind Speed: " + data.list[16].wind.speed + " MPH";
                     document.getElementById('weatherContainer').append(windSpeedDay3);
         
           
                var temperatureDay3 = document.createElement("p");
                var kelvin = data.list[16].main.temp; 
                 temperatureDay3 = ((kelvin - 273.15) * 9/5+32);
                 temperatureDay3 = Math.floor(temperatureDay3);
                 temperatureDay3.textContent = temperatureDay3;
                      document.getElementById('weatherContainer').append("Temperature: " + temperatureDay3 + " °F");
         
         
             var humidityDay3 = document.createElement("p");
                 humidityDay3.textContent = "Humidity: " + data.list[16].main.humidity + " %";
                     document.getElementById('weatherContainer').append(humidityDay3);
         
    
            ////////////////////// day 4 weather

            var date4 = document.createElement("p");
            date4.textContent = "Date: " + data.list[24].dt_txt;
                document.getElementById('weatherContainer').append(date4);
    
                
       var windSpeedDay4 = document.createElement("p");
            windSpeedDay4.textContent = "Wind Speed: " + data.list[24].wind.speed + " MPH";
                document.getElementById('weatherContainer').append(windSpeedDay4);
    
      
           var temperatureDay4 = document.createElement("p");
           var kelvin = data.list[24].main.temp; 
            temperatureDay4 = ((kelvin - 273.15) * 9/5+32);
            temperatureDay4 = Math.floor(temperatureDay4);
            temperatureDay4.textContent = temperatureDay4;
                 document.getElementById('weatherContainer').append("Temperature: " + temperatureDay4 + " °F");
    
    
        var humidityDay4 = document.createElement("p");
            humidityDay4.textContent = "Humidity: " + data.list[24].main.humidity + " %";
                document.getElementById('weatherContainer').append(humidityDay4);
    
    
            ////////////////////// day 5 weather

            var date5 = document.createElement("p");
            date5.textContent = "Date: " + data.list[36].dt_txt;
                document.getElementById('weatherContainer').append(date5);
    
                
       var windSpeedDay5 = document.createElement("p");
            windSpeedDay5.textContent = "Wind Speed: " + data.list[36].wind.speed + " MPH";
                document.getElementById('weatherContainer').append(windSpeedDay5);
    
      
           var temperatureDay5 = document.createElement("p");
           var kelvin = data.list[36].main.temp; 
            temperatureDay5 = ((kelvin - 273.15) * 9/5+32);
            temperatureDay5 = Math.floor(temperatureDay5);
            temperatureDay5.textContent = temperatureDay5;
                 document.getElementById('weatherContainer').append("Temperature: " + temperatureDay5 + " °F");
    
    
        var humidityDay5 = document.createElement("p");
            humidityDay5.textContent = "Humidity: " + data.list[36].main.humidity + " %";
                document.getElementById('weatherContainer').append(humidityDay5);
    
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

//function to dynamically create buttons with previous search information

function generateButton(data) {
    let cityName = data.city.name;
    let buttonTarget = document.getElementById('cities');
    let button = document.createElement('button');
        button.innerHTML = cityName;
        buttonTarget.appendChild(button);
        button.addEventListener('click', searchState);
};

// function RemoveWeather()
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

    
    //function to dynamically create buttons with previous search information

    function generateButton(data) {
        let cityName = data.city.name;
        let buttonTarget = document.getElementById('cities');
        let button = document.createElement('button');
            button.innerHTML = cityName;
            buttonTarget.appendChild(button);
            e.preventPropagation();
            button.addEventListener('click', searchState);
    };

searchButton.addEventListener('click', searchState);

// includes() method prevents duplication in localStorage, returning true or false value;
// || or operators can be used outside of conditional logic



// forLoop to display weather (cannot get arrays to separate easily into days)
/*
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