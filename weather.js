const weatherData = document.querySelector('.weather-data');
const weatherImg = document.querySelector('.weather-image');

askForCoords();

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoSuccess(position){
    const latitude =  position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log('Cant get your position.');
}

function getWeather(lat, lon){
    const API_KEY = '4828ab1853f5e6ae207c22caa18d75f6';
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temparature = json.main.temp;
        const weather = json.weather[0].main;
        const place = json.name;
        const img = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
        weatherImg.innerHTML = `<img src="${img}">`;
        weatherData.innerHTML = `${temparature} °C<br>${weather}<br>${place}`;
        magicGrid.positionItems();
    });
}