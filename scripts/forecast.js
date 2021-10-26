
// API KEY from Accu Weather API'S : https://developer.accuweather.com/user/me/apps
// Note! You can request only 50 times with this key, if youu need more request than you delete app and create to get new API which you 
const key = 'DcqsCRHCuzA8AS76jqNz1bXqXtPVZcAh'

/*Guide
1. First we need to make request to a certain end point to get city information and in that in for is going to be city code
2. When we had city code, we are going to send that city code to it so it can identify where we want to get weather and it will send us weather condition back for that area. 
3. Summary:  We are going to do two request for two end points 

How do we know what those end points are?
Typicaly you wil get some kind API REFERENCE

1. Accu Weather > Api referance > Text search => City search
*/ 


// get weather information , note! id= city key

const getWeather = async (id) => {
    // we are fetch API inside, we want to function return promise and inside the function we need to pass key
    
    // Go bakck to main menu and find cuurentLocaction to copy url
    // So request quould be base + query => 'http://dataservice.accuweather.com/currentconditions/v1/id?apikey..'
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`
    // fetch -> retunrs a promise which we need a wait and 
    const response = await fetch(base + query)
    const data = await response.json()
    
   // console.log(data)
   // always return data!!!
    return data[0]
}
// let's pass id(key of city) from homepage we get form first request in object element for Mancjster (Key: "329260")
getWeather('329260')



//  Get weather information
const getCity = async (city) => {
    // First request
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    // query you start alqays with ? + apikey field + q-field
    const query = `?apikey=${key}&q=${city}`
    // now we are combine thise together:
    const response = await fetch(base + query)
    // turn it to json
    const data = await response.json()

    // console.log(data)
    // just select first element which is Manchester city data[0] , other elements are other citys form other countries!!
    return data[0]
}
// Enter the city and get data, then return weather with key for the city, Then return all togehter city + weather
// This request we are going to recreate on UI side from input form
// getCity('manchester').then(data => {
//     return getWeather(data.Key)
// })
// .then(data => {
//     console.log(data)
// })
// .catch(err => console.log(err))




// Here we deside to use first element 
// getCity('manchester')
// .then(data => console.log(data))
// .catch(err => console.log(err))



