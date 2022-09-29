

    async function getWeather(location = "london") {

      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=63d7740dd0d947dbf07d0ac439f05661`, {mode: 'cors'});
      const weatherData = await response.json();
      
      console.log(weatherData.name+", "+weatherData.sys.country);
      console.log(weatherData.main.temp+"°C");
      console.log("https://openweathermap.org/img/wn/"+weatherData.weather[0].icon);
      console.log("Feels Like:"+weatherData.main.feels_like+"°C");
      console.log("Humidity::"+weatherData.main.humidity+"%");
      console.log(weatherData.weather[0].main);

      return {
        country:weatherData.name+", "+weatherData.sys.country,
        temp:weatherData.main.temp,
        icon:"https://openweathermap.org/img/wn/"+weatherData.weather[0].icon,
        feel:weatherData.main.feels_like,
        humidity:"Humidity:"+weatherData.main.humidity+"%",
        weather_con:weatherData.weather[0].main
      }
    
    }

    export default getWeather;