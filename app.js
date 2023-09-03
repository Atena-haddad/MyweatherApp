function Showtemperature(response){
  console.log(response.data);
  let temperature= Math.round(response.data.main.temp);
  let cityName=response.data.name;
  console.log(temperature);
  let nameElement= document.querySelector("#city-name");
  nameElement.innerHTML=`${cityName}`;
  let temperatureElement= document.querySelector("#city-temp");
  temperatureElement.innerHTML=`${temperature} ° C `;
  let weather=response.data.weather[0].main;
  let weatherElement= document.querySelector("#city-weather");
  weatherElement.innerHTML=`${weather}`;

  let humidity=response.data.main.humidity;
  let humidityElement= document.querySelector("#city-humidity");
  humidityElement.innerHTML=`humidity : ${humidity}`;

  let wind =response.data.wind.speed ;
  let windElement= document.querySelector("#city-wind");
  windElement.innerHTML=`wind speed : ${wind}`;

 }

function search(event) {
  event.preventDefault();
  let input = document.querySelector("#search");
  let cityName=input.value;
  console.log(cityName);
  let apiKey= "ab13aa3fe6d8d25130a60034078e4897";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(Showtemperature);
}

searchb.addEventListener("click", search);

function currenttemp(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(handlePosition);

}
function handlePosition(position){
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat , lon);
  apiKey="ab13aa3fe6d8d25130a60034078e4897"
  apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  axios.get(`${apiUrl}&appid=${apiKey}`).then(ShowCurrent);
}

function ShowCurrent(info){

  let temperature= Math.round(info.data.main.temp);
  let cityName=info.data.name;
  console.log(temperature);
  let nameElement= document.querySelector("#city-name");
  nameElement.innerHTML=`${cityName}`;
  let temperatureElement= document.querySelector("#city-temp");
  temperatureElement.innerHTML=`${temperature} ° C `;
  let weather=info.data.weather[0].main;
  let weatherElement= document.querySelector("#city-weather");
  weatherElement.innerHTML=`${weather}`;

  let humidity=info.data.main.humidity;
  let humidityElement= document.querySelector("#city-humidity");
  humidityElement.innerHTML=`humidity : ${humidity}`;

  let wind =info.data.wind.speed ;
  let windElement= document.querySelector("#city-wind");
  windElement.innerHTML=`wind speed :${wind}`;

}
currentb.addEventListener("click", currenttemp);
