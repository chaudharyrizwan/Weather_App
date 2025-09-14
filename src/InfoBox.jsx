import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit'; //cold weather icon
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; //rainy weather icon
import SunnyIcon from '@mui/icons-material/Sunny'; // hot weather icon

export default function infoBox({info}){
    let Snowy_URL ="https://plus.unsplash.com/premium_photo-1676747433701-ebe10f095b77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U25vd3klMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    let Cold_URL = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let Hot_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let Rainy_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    
    const getWeatherImage = () => {
        if (info.temp < 16 && info.humidity >= 70) {
            return Snowy_URL;        // Snowy / stormy for cold + wet
        } else if (info.temp < 16) {
            return Cold_URL;
        } else if (info.humidity > 70) {
            return Rainy_URL;
        } else {
            return Hot_URL;
        }
    };
    const weatherIcon = () => {
        if (info.temp < 16 && info.humidity >= 70) {
            return <AcUnitIcon/>;  
        } else if (info.temp < 16) {
            return <AcUnitIcon/>;
        } else if (info.humidity > 70) {
            return <ThunderstormIcon/>;
        } else {
            return <SunnyIcon/>;
        }
    };
    const getBackground = () => {
        if (info.temp < 15) return "#a1c4fd"; // cold blue
        if (info.humidity > 70) return "#667db6"; // rainy gray
        return "#fbc2eb"; // warm pink/orange
    };


    return(
        <div className="InfoBox" style={{ background: getBackground()}}>
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={getWeatherImage()}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;{weatherIcon()}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>🌡<b>Temprature</b> = {info.temp}&deg;C</p>
                            <p>💧<b>Humidity</b> = {info.humidity}&deg;C</p>
                            <p>⬇ <b>Min Temp</b> = {info.tempMin}&deg;C</p>
                            <p>⬆ <b>Max Temp</b> = {info.tempMax}&deg;C</p>
                            <p>
                                The weather can be described as <b><i>{info.weather}</i></b> and <b>feels like</b> {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div> 
        </div>
    )
}