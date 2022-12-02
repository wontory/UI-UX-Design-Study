const weather = document.querySelector('.weather');

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
        const place = json.name;
        weather.innerText = `${temparature} @${place}`;
    });
}