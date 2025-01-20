// 6d4a4a5dcbc737d32048059315169742
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const searchbar = document.getElementById('search')
searchbar.addEventListener('keyup',detectAction)
const cityName = document.getElementById('city_name')
const weather = document.getElementById('weather')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const wind = document.getElementById('wind')
const visibility = document.getElementById('visibility')
apikey = '6d4a4a5dcbc737d32048059315169742'

function detectAction(event){
  if(event.key == 'Enter')
    getCityName()
}

function getCityName(){
  let urlNow = "https://api.openweathermap.org/data/2.5/weather?q="+searchbar.value+"&appid=6d4a4a5dcbc737d32048059315169742"
  // let urlDay1 = "https://api.openweathermap.org/data/2.5/forecast/daily?q="+searchbar.value+"&cnt=1"+"&appid=6d4a4a5dcbc737d32048059315169742"
  // let urlDay2 = "https://api.openweathermap.org/data/2.5/forecast/daily?q="+searchbar.value+"&cnt=2"+"&appid=6d4a4a5dcbc737d32048059315169742"
  // let urlDay3 = "https://api.openweathermap.org/data/2.5/forecast/daily?q="+searchbar.value+"&cnt=3"+"&appid=6d4a4a5dcbc737d32048059315169742"
  // api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={API key}
  dataFetch(urlNow)
}

async function dataFetch(urlNow){
  try{
    const nowResponse = await fetch(urlNow)
    // const day1Response = await fetch(urlDay1)
    // const day2Response = await fetch(urlDay2)
    // const day3Response = await fetch(urlDay3)
    
    if(!nowResponse.ok){
      cityName.innerHTML = '-'
      weather.innerHTML = '-'
      temp.innerHTML = '-'
      humidity.innerHTML = '-'
      wind.innerHTML = '-'
      visibility.innerHTML = '-'
      searchbar.style.borderColor = 'red'
      alert('error!!!')

    }
      

    let nowData = await nowResponse.json()
    // let day1Data = await day1Response.json()
    // let day2Data = await day2Response.json()
    // let day3Data = await day3Response.json()

    // console.log(day1Data)
    searchbar.style.borderColor = 'white'
    cityName.innerHTML = nowData.name
    weather.innerHTML = nowData.weather['0'].main
    temp.innerHTML = (nowData.main.temp - 273.15).toFixed(2) + " ℃ "
    humidity.innerHTML = nowData.main.humidity +" % "
    wind.innerHTML = nowData.wind.speed + " m/s "
    visibility.innerHTML = nowData.visibility
  }
  catch(error){
    searchbar.style.borderColor = 'red'
    cityName.innerHTML = '-'
    weather.innerHTML = '-'
    temp.innerHTML = '-'
    humidity.innerHTML = '-'
    wind.innerHTML = '-'
    visibility.innerHTML = '-'
    alert("Error!!!")
  }
}