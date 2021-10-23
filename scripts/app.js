

const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')


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

    const cityDets = data.cityDets
    const weather = data.weather

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
}
