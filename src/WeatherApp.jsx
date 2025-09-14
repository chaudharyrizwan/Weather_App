import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Mumbai",
        feelsLike:26.6,
        humidity: 82,
        temp: 26.6,
        tempMax: 26.6,
        tempMin: 26.6,
        weather: "overcast clouds"
    })
    let updateInfo = (result) => {
        setWeatherInfo(result)
    };

    return(
        <div className="weatherApp">
            <h2 style={{paddingTop: "50px" }}>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}