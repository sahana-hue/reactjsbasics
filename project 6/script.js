document.getElementById("get-btn").addEventListener("click",getWeatherOfBagalkoti);
async function getWeatherOfBagalkoti(){   
    try{
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=bagalkot&appid=a7e79c1533d4f1d7341837581833133a&units=metric");
        const data = await response.json();
        if (response.ok) {
            document.getElementById("status").innerText = data.main.temp + " °C";
        } else {
            console.log(data);
            document.getElementById("status").innerText = "Error: " + data.message;
        }
    }catch(error){
        console.log(error);
        document.getElementById("status").innerText = "Failed to fetch weather data.";
    }
}   
    
        