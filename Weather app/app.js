document.addEventListener("DOMContentLoaded",()=>{
    const searchButton=document.querySelector(".card .search button");
    const cityinput=document.querySelector(".card .search input");

    searchButton.addEventListener("click",()=>{
        const cityname=cityinput.value;
        updatedetails(cityname);
    })
    

    cityinput.addEventListener('keyup', (event) => {

        if (event.key === 'Enter') {
        const cityname=cityinput.value;
        updatedetails(cityname);
        }
    })
})

window.addEventListener("load", () => {
    let intialcity=document.querySelector(".card .weather .city");
    updatedetails(intialcity.innerText);
  });

updatedetails=async (cityname)=>{
    try{
  let URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c8246df1afabb83c3a2cb2dbb3a7a315&units=metric`;
  let response = await fetch(URL);
  let data = await response.json();
  let temp=data.main.temp+"°C";
  let temppart=document.querySelector(".card .weather .temp");
  temppart.innerText=temp;

  let citynamepart=document.querySelector(".card .weather .city");
  citynamepart.innerText=cityname;

  let humiditypart=document.querySelector(".card .details .col .humidity");
  let humidity=data.main.humidity+"%";
  humiditypart.innerText=humidity;

  let windpart=document.querySelector(".card .details .col .wind");
  let wind=data.wind.speed+" km/hr";
  windpart.innerText=wind;

 const weatherIcon = document.querySelector('.card .weather-icon');
 const mainWeather = data.weather[0].main; 
 const newSrc = `${mainWeather.toLowerCase()}.png`;
 weatherIcon.src = newSrc;
}
catch(error){
    alert("Please enter a valid city name");
}
}