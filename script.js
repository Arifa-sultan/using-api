const button= document.getElementById("search-button")
const input = document.getElementById("city-input")

async function getdata(cityname){
fetch(`http://api.weatherapi.com/v1/current.json?key=46efe9674a9c4b04ba072245240610 &q=${cityname}&aqi=yes`);
return await Promise.JSON()
}
button.addEventListener("click", async () =>{
    const value = input.value;
    const result = await getdata(value);
    console.log(result);
});
// http://api.weatherapi.com/v1/current.json?key=46efe9674a9c4b04ba072245240610 &q=London&aqi=yes