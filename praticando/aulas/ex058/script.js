const apiKey = '0e783a7e49a5ff9c8f1c1660e7a30ce1';
const flagsURL = "https://flagsapi.com/";
const unsplashKey = "https://source.unsplash.com/1600x900/?"

const input = document.querySelector('#city-name'); 
const button = document.querySelector('#search');
const city = document.querySelector('#city');
const countryflag = document.querySelector('#country');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const umidity = document.querySelector('#umidity');
const wind = document.querySelector('#wind')
const weatherIcon = document.querySelector('#weather-icon')
const hide = [...document.querySelectorAll('.hide')];
const err = document.querySelector('#error-message')

const showBackground = nameCity => {
    nameCity = nameCity.replace(" ","");

    document.body.style.cssText = `background-image: url(https://source.unsplash.com/1600x900/?${nameCity}); background-size: cover; background-repeat: no-repeat;`;
}

button.addEventListener('click', (evt) => {
    const cityName = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=pt_br`
    const requestAPI = fetch(url)
    .then(response => response.json())
    .then(data => {
        showBackground(cityName);
        hide.map((element, index) => {
            element.style.display = 'block';
            err.style.display = 'none'
        });
        countryflag.src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`;
        city.innerHTML = cityName;
        description.innerHTML = data.weather[0].description;
        weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        temperature.innerHTML = `${data.main.temp}°C`;
        weatherIcon.style.cssText = `display: inline;
        ;`;
        wind.innerHTML = data.wind.speed;
        umidity.innerHTML = `${data.main.humidity}%`;
        console.log(data);
    })
    .catch(error => {
        hide.map((element, index) => {
            element.style.display = 'none'
            err.style.display = 'block'
        });
    });
});
