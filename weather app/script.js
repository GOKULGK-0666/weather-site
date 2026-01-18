/* file: script.js */

  const getWeather= async(city)=>{
try{
  const response=await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
  if(!response.ok){
  throw new Error(`HTTP error! status: ${response.status}`)
      }
  const data=await response.json()
  console.log(data)
return data
  } catch(error){
  console.log(error)
    alert('Something went wrong, please try again later')
   }
}
   const showWeather= async (city)=>{
   const weatherData=await getWeather(city)
   if (!weatherData) return
                         
// DOM elements
        document.getElementById("weather-icon").src = weatherData.weather[0].icon;
        document.getElementById("main-temperature").textContent = `Temperature: ${weatherData.main.temp}°C`;
        document.getElementById("feels-like").textContent = `Feels like: ${weatherData.main.feels_like}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${weatherData.main.humidity}%`;
        document.getElementById("wind").textContent = `Wind speed: ${weatherData.wind.speed} m/s`;
        document.getElementById("wind-gust").textContent = `Wind gust: ${weatherData.wind.gust || "N/A"} m/s`;
        document.getElementById("weather-main").textContent = `Condition: ${weatherData.weather[0].main}`;
                                  document.getElementById("location").textContent = `Location: ${weatherData.name}`;

 }

  document.getElementById('get-weather-btn').addEventListener('click',()=>{

   const select=document.querySelector('select')
   const city=select.value.trim()
   if(city==='paris'){
   alert('Something went wrong, please try again later')
  
  }else if(city){
        showWeather(city)
         }else{
         alert('Please select a city')
         }
        })