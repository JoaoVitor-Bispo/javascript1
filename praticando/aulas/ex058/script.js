//example = http://api.openweathermap.org/geo/1.0/direct?q=Contagem&limit=5&appid=0e783a7e49a5ff9c8f1c1660e7a30ce1&lang=pt-br
const apiKey = '0e783a7e49a5ff9c8f1c1660e7a30ce1';
const flagsURL = "https://flagsapi.com/";

const input = document.querySelector('#city-name'); 
const button = document.querySelector('#search');
const city = document.querySelector('#city');
const countryflag = document.querySelector('#country');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');
const umidity = document.querySelector('#umidity');
const hide = [...document.querySelectorAll('.hide')]

button.addEventListener('click', (evt) => {
    hide.map((element, index) => {
        element.style.display = 'block'
    })
    const cityName = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}&lang=pt_br`
    const requestAPI = fetch(url)
    .then(response => response.json())
    .then(data => {
        countryflag.src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`
        city.innerHTML = cityName
        description.innerHTML = data.weather[0].description
        temperature.innerHTML = data.main.temp
        umidity.innerHTML += `${data.main.humidity}%`
    })
})
