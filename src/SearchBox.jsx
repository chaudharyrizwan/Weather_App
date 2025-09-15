import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async () =>{
        try{
            let responce  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await responce.json();
            console.log(jsonResponce);
            let result = {
                city: jsonResponce.name,
                temp: jsonResponce.main.temp,
                tempMin: jsonResponce.main.temp_min,
                tempMax: jsonResponce.main.temp_max,
                humidity: jsonResponce.main.humidity,
                feelsLike: jsonResponce.main.feels_like,
                weather: jsonResponce.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
        
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo)
        }catch(err){
            setError(true);
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    }
    return(
        <div className='SearchBox'>
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField 
                required 
                id="city" 
                label="City Name" 
                variant="outlined"
                value={city}
                onChange={handleChange}
            />&nbsp;&nbsp;
            <Button variant="contained" type="submit" id='searchButton'>Search</Button>

    {/* Show alert if error exists */}
      {error && (
        <Alert variant="filled" severity="error" style={{ marginBottom: "15px" }} onClose={() => {}}>
          No such place exists
        </Alert>
      )}
        </form>
        </div>
    )
}