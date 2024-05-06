const input = document.querySelector('#city-input')

const apiKey = `740e4a3636434933b92135550240505 `

// -----------------------------------------------
const weatherInfo = document.querySelector('#weather-info')

const cityName = document.querySelector('#city-name')
const cityCoun = document.querySelector('#city-coutry')
const cityData = document.querySelector('#date')
const cityTemp = document.querySelector('#temperature')
const cityDesc = document.querySelector('#description')
const cityWind = document.querySelector('#wind-speed')
const cityIcon = document.querySelector('#weather-icon')
const cityRegi = document.querySelector('.city-region')

// -----------------------------------------------

const gitBtn = document.querySelector('#gitBtn')
const linBtn = document.querySelector('#linBtn')

// -----------------------------------------------

async function weather() {

    const apiData = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value}&aqi=no`

    try{
        const response = await fetch(apiData)
        const data = await response.json()
        console.log(data);
        weatherData(data)
    }catch(err){
        console.log(err);
    }
}

// ----------------------------------- data Information display

function weatherData(data) {
    const location = data.location; 
    const current = data.current; 

    cityName.textContent = location.name;
    cityCoun.textContent = location.country;
    cityData.textContent = location.localtime;
    cityRegi.textContent = location.tz_id;

    cityTemp.textContent = `${current.temp_c}°C`;
    cityDesc.textContent = current.condition.text;
    cityWind.textContent = `Wind speed: ${current.wind_kph} km/h`;
    cityIcon.src = current.condition.icon
}

// ------------------------------------ input 

input.addEventListener('keyup', () => {
    if (input.value.trim() === '') {
        weatherInfo.style.display = 'none';
    } else {
        weatherInfo.style.display = 'block';
        weather();
    }
})


// ----------------------------------- Link Btn

gitBtn.addEventListener('click', () => {window.location.href=`https://github.com/EldostJs/AboutMe`})

linBtn.addEventListener('click', () => {window.location.href=`https://www.linkedin.com/in/eldost-mirzeyev-8512732aa/`})


// ------------------------------------ The End