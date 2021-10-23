

const cityForm = document.querySelector('form')

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
    .then( data => console.log(data))
    .catch(err => console.log(err))
}