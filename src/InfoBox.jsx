import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){

    const INT_URL="https://images.unsplash.com/photo-1545042679-41d22b2ca130?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const  COLD_URL="https://images.unsplash.com/photo-1692905262350-2d650281ae9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGltYWdlfGVufDB8fDB8fHww";
    const HOT_URL="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.webp?a=1&b=1&s=612x612&w=0&k=20&c=Dbpa9jxwFTZnW-yyyJccEU_FqhEL3fXqMIP68kbLUFw=";
    const RAIN_URL="https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.webp?a=1&b=1&s=612x612&w=0&k=20&c=vUlQgCd942j9Z5LU7yneBVZD3LuOCQtE-QLJpg_FeiY=";
    return (
        <div className="InfoBox">
           
            <div className='cardContain'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
            ?RAIN_URL
            :info.temp>15
            ?HOT_URL
            :COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<LightModeIcon/>
            :<AcUnitIcon/>
        }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <div>Temprature={info.temp}&deg;C</div>
         <div>Humidity={info.humidity}</div>
         <div>Min Temp={info.tempMin}&deg;C</div>
         <div>Max Temp={info.tempMax}&deg;C</div>
         <div>The weather can be described as <b>{info.weather}</b> and feels like={info.feelslike}&deg;C</div>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
        

    );

}