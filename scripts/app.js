

const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')


// The idea is just to call  getCity, getWeather function inside updateCity
const updateCity = async (city) => {
    console.log(city)

    const cityDets = await getCity(city) 
    const weather = await getWeather(cityDets.Key) // her we get data from forecast reterun data[0]

    return {
        cityDets: cityDets,
        weather: weather
    }
}

// event listener submti event => when we press ENTER we submti form
cityForm.addEventListener('submit', addCityApi )

function addCityApi(e) {
    e.preventDefault()
    // select atributn name = city and trim(no space)
    const city =cityForm.city.value.trim() 
    // reset input field
    cityForm.reset()

    // update the UI with new city name with new function and add then(), cathc()

    updateCity(city)
    .then( data => updateUI(data))
    .catch(err => console.log(err))
}



// Update UI 
//Wil be responsilbe for taking in some data and output in it ti the browser using these referance
const updateUI = (data) => {
    // data is object for city-location and city weather  which returns and stored in previous function
    // const cityDets = data.cityDets
    // const weather = data.weather
    const {cityDets, weather} = data
    console.log(data)
    // Update details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
        `

        // remove d-none class if present
        if(card.classList.contains('d-none')) {
            card.classList.remove('d-none')
        } 

        // update the nigh/day & icon images 
            // This is good trick to define timeSrc variable which you can manipulate and updated with if condition and then put it in img tag !!!
        let timeSrc = 0
        if(weather.IsDayTime) {
            timeSrc = 'img/day.svg'
        } else {
            timeSrc= 'img/night.svg'
        }
        // let use seleceted img and add to setAtribute !!
        time.setAttribute('src', timeSrc)

        // Update icon images
        const iconSrc = `img/icons/${weather.WeatherIcon}.svg`
        icon.setAttribute('src', iconSrc)
}
