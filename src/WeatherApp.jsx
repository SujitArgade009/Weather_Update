import SearchBox from './SearchBox'
import Info from './Info'
import { textAlign } from '@mui/system'
import { useState } from 'react'


export default function  WeatherApp(){
    let [weatherinfo, setWeatherinfo]=useState({ city:"Pune",
    temp: 32,
    mintemp:32.74,
    maxtemp: 32.76,
    humidity: 24,
    feelslike: 31,
    weather: "Clouds",
    });

    let updateInfo=(newinfo)=>{
        setWeatherinfo(newinfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App!</h2>
            <SearchBox updateInfo={updateInfo}/>
            <Info info={weatherinfo}/>
        </div>
    )
}