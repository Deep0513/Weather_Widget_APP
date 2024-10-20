import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import React, { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3c9b2d4265fa1338354e6be74d51ff97`;
            let response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('City not found');
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
        temp: (jsonResponse.main.temp - 273.15).toFixed(2),
        tempMin: (jsonResponse.main.temp_min - 273.15).toFixed(2),
        tempMax: (jsonResponse.main.temp_max - 273.15).toFixed(2),
        humidity: jsonResponse.main.humidity,
        feelslike: (jsonResponse.main.feels_like - 273.15).toFixed(2),
        weather: jsonResponse.weather[0].description,

        
            };
            console.log(result);
            return result;
        } catch (err) {
            setError(true);
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();
        console.log(city);
        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); // Resetting city after fetching
            setError(false); // Reset error state
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
                {error && <p style={{ color: "red" }}>No such place exists</p>}
            </form>
        </div>
    );
}
