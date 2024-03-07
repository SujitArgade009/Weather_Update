import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { color } from '@mui/system';

export default function SearchBox({updateInfo}){
    let [city, setCity]=useState("Pune");
    let [err, setError]=useState(false);

    const URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="40d17b01aed0da03baba587b36c9ff78";

    let getWeatherInfo= async()=>{
        try{
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
        }catch(err){
            throw err;
        }
      
    };
    let handleChange=(event)=>{
        // console.log(event);
        // console.log(event.target.name);
        // console.log(event.target.value);
        setCity(event.target.value);
    }
    let handleSubmit= async(event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newinfo= await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
      
    }
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br></br>
            <br></br>
            <Button variant="contained" type='submit'>Search</Button>
            {err && <p style={{color:"red"}}>No such Place Exists in Our API</p>}
            </form>
        </div>
    )
}

