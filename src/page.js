
import weather from './weather.js';
async function page(country_weather){

   const datas= await weather(country_weather);
   console.log(datas);

   let country_div = document.querySelector(".country");
   let degrees_div = document.querySelector(".degrees");
   let image_div = document.getElementById("image");
   let feels_div = document.querySelector(".feels");
   let humidity_div = document.querySelector(".humidity");
   let weather_div = document.querySelector(".main-weather");
  
  

   
   country_div.textContent=datas.country;
   degrees_div.textContent=Math.round(datas.temp-273.15)+"°C";
   feels_div.textContent="Feels Like:"+Math.round(datas.feel-273.15)+"°C";
   humidity_div.textContent=datas.humidity;
   weather_div.textContent="Weather: "+datas.weather_con;
   image_div.src=datas.icon+".png";


   fetch(`https://api.giphy.com/v1/gifs/translate?api_key=6xvD8ya6aG9lXrGXu9aike9cD8bAdHEs&s=${datas.weather_con} Weather`, {mode: 'cors'})
   .then(function(response) {
     return response.json();
   })
   .then(function(response) {
     
    document.body.style.backgroundImage = `url('${response.data.images.original.url}')`;


    console.log(response.data.images.original.url);

   });

}

export default page;