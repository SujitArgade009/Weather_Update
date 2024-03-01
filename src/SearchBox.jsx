import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity]=useState("Pune");
    const URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="40d17b01aed0da03baba587b36c9ff78";

    let getWeatherInfo= async()=>{
       let res= await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonRes=await res.json();
    //    console.log(jsonRes);
       let result={
        city:city,
        temp: jsonRes.main.temp,
        mintemp: jsonRes.main.temp_min,
        maxtemp: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        feels_like: jsonRes.main.feels_like,
        weather: jsonRes.weather[0].description,
       }
       console.log(result);
       return result;
    };
    let handleChange=(event)=>{
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        setCity(event.target.value);
    }
    let handleSubmit= async(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo= await getWeatherInfo();
        updateInfo(newinfo);
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            </form>
        </div>
    )
}

