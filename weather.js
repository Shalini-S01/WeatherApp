const api={
    key: "dae142b17bba09f80a3d21ec8b1ffff6",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}
const searchbox= document.querySelector('.search');
searchbox.addEventListener('keypress',searchQuery)

function searchQuery(e){
    if(e.keyCode==13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=>{
        return weather.json();
    }).then(dispalyResults);
}

function dispalyResults(weather){
    console.log(weather)
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name}, ${weather.sys.country}`;
    let temp=document.querySelector('.current_weather .temperature');
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>ºc</span`;

    n=new Date()
    let date=n.getDate();
    let month=n.getMonth();
    let year=n.getFullYear();
    let dmy=`${date}-${month}-${year}`
    const disDate=document.querySelector('.location .date');
    disDate.innerText=dmy
    
    const weath=document.querySelector('.current_weather .weather');
    weath.innerText=`${weather.weather[0].main}`
    console.log(weather.weather[0].main)

    const hi_low=document.querySelector('.current_weather .high-low');
    hi_low.innerText=`${weather.main.temp_max}ºc /${weather.main.temp_min}ºc`
    




}