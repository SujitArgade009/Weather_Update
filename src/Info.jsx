import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Info({info}){
   // const IMG_URL="https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const Rain_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjByYWlueSUyMHNlYXNvbiUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const Cold_URL="https://images.unsplash.com/photo-1528191710846-99b8717a2830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGNvbGQlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    const Hot_URL="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBzdW1tZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    return (
        <div className="InfoBox">
        <div className='CardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 
                ? Rain_URL 
                : info.temp > 15
                ? Hot_URL 
                :Cold_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
                {info.humidity > 80 
                ? <ThunderstormIcon/> 
                : info.temp > 15
                ? <WbSunnyIcon/> 
                :<AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
            <p><b>Tempreture: {info.temp}&deg;C</b></p>
            <p><b>Humdity: {info.humidity}</b></p>
            <p><b>Maximum Tempreture: {info.maxtemp}&deg;C</b></p>
            <p><b>Mininmum Tempreture: {info.mintemp}&deg;C</b></p>
            <p><b>The weather can described as <i>{info.weather} </i>and feels like {info.feels_like}&deg;C</b></p>
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    )
};