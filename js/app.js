"use strict"




function getWeather() {
       document.getElementById('loader').classList.remove('d-none'); 
       document.getElementById('btn').classList.add('d-none'); 
       setTimeout(() => {
           document.getElementById('loader').classList.toggle('d-none'); 
           document.getElementById('btn').classList.toggle('d-none');   
       }, 1001);

       const xmlhttp = new XMLHttpRequest()
       const method = "GET"
       let city = document.getElementById('cityEntered').value ;
       const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9de588c6173bf1be1d183b246ac26edb';
       xmlhttp.open( method , url) 
       xmlhttp.send()

       if (city == "") {
              alert("enter a valid city")
       }
       xmlhttp.onreadystatechange = (event)=>{
              if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                     let result = xmlhttp.response;
                     let resultJsonMethod = JSON.parse(result);
                     let county = resultJsonMethod.sys.country;
                     let main = resultJsonMethod.main.temp;
                     let name = resultJsonMethod.name
                     let weatherMain = resultJsonMethod.weather[0].main;
                     let weatherDescription = resultJsonMethod.weather[0].description;
                     console.log(JSON.parse(result))
                     document.getElementById('weatherContent').classList.remove('d-none')
                     document.getElementById('country').innerText = county;
                     document.getElementById('citiname').innerText = name;
                     document.getElementById('temp').innerText = main;
                     document.getElementById('weather_main').innerText = weatherMain;
                     document.getElementById('description').innerText = weatherDescription;

              }else if (xmlhttp.status == 404){
                     document.getElementById('weatherContent').innerText= 'Error 404'
              }
       }
       
      

}