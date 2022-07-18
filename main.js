let api = '92daee3c01bf149f0ea3285c9254ea8a';
let input = document.getElementById('text');
let inputbtn = document.getElementById('weather');
let h4box = document.getElementById('box');
let subtitle = document.getElementById('subtitle');
let boxtime = document.getElementById('realtime');
let sunriseBox = document.getElementById('sunrise');
let sunsetBox = document.getElementById('sunset');

function conver (num){
    return (num - 273).toFixed(2);
}
function realtime(){
    const real = new Date();
    const gethours = real.getHours()
    const getminutes = real.getMinutes();
    boxtime.innerHTML = gethours + ":" + getminutes;
}
realtime();
setInterval(()=>{
    realtime();
},1000)

inputbtn.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${api}`)
   .then(data => data.json())
   .then(data => {
      console.log(data);
       
       let temp  = data['main']['temp'];
       let icon = data['weather']['0']['icon'];
       let country = data['sys']['country'];
       let sunrise = data['sys']['sunrise'];
       let sunset = data['sys']['sunset'];
       console.log(sunset);
       h4box.innerHTML = `Температура:${conver(temp)} <img src=https://openweathermap.org/img/wn/${icon}@2x.png alt ="" />`;
       subtitle.innerHTML = `Страна:${country}`;
       sunriseBox.innerHTML = `Восход через:${sunrise}`;
       sunsetBox.innerHTML = `Закат через:${sunset}`;
   })

})