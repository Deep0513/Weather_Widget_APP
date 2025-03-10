import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
const [WeatherInfo , setweatherInfo]=useState({
    city:"Delhi",
    feelslike:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",
});

let updateInfo=(newInfo)=>{
    setweatherInfo(newInfo);
}
    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>

            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={WeatherInfo}/>
            </div>
    );
}