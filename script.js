const cities = {
    3172391: "Napoli",
    6691831: "Vatican City",
    6548070: "Krukow",
    1726701: "Barcelona",
    2634715: "Washington"
}

let select = document.createElement('select');
select.id = 'city';

for (let city in cities) {
    let option = document.createElement('option');
    option.textContent = cities[city];
    option.value = city;
    select.append(option);
}
document.querySelector('.list').append(select);

const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "c057d8c34eae706edaf66ed3f164fdae"
}
function getWeather() {
    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    document.querySelector('.city').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.wind').textContent = `wind speed - ${data.wind.speed}`;
    document.querySelector('.humidity').textContent = `humidity - ${data.main.humidity}`;
    document.querySelector('.image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

    document.querySelector('.type').textContent = data.weather[0].description;
}
getWeather();

document.getElementById('city').onchange = getWeather;