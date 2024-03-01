import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";

export default function Info({info}){
    const IMG_URL="https://images.unsplash.com/photo-1505533321630-975218a5f66f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    return (
        <div className="InfoBox">
        <div className='CardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={IMG_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
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