const cityInput = document.querySelector(".inputText");
const btn = document.querySelector(".btn");







btn.addEventListener('click', ()=>{
    const cityName = cityInput.value


    getData(cityName)
});

function getData(name){
    const API = "60025085de92d6037e86b5afc106d578";

    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=fr`;

    fetch(baseURL)
    .then(res =>res.json())
    .then(data => {
        const {name, sys:{country}, main: {temp, feels_like, humidity}, weather: [{description}], wind:{speed}} = data;
        console.log(name, country, temp, feels_like, humidity, description, speed)
  

        const city = document.querySelector(".city")
        const temperature = document.querySelector(".temp")
        const hum = document.querySelector(".humidity")
        const wind = document.querySelector(".wind")
        const weatherDesc = document.querySelector(".weather")
        const feeling = document.querySelector(".feeling")




        city.textContent = `${name}, ${country}`;
        temperature.innerText = `${temp.toFixed(0)}°`;
        hum.textContent = `Humidité: %${humidity}`
        wind.innerHTML = `Vent: ${speed}km/h`;
        weatherDesc.innerHTML = `<i>${description.toUpperCase()}</i>`
        feeling.textContent = `Ressenti : ${feels_like}`
  
    })

    cityInput.value = "";
}