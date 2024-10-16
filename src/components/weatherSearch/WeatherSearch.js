import React, { useState } from 'react';
import {
    WeatherAppContainer,
    Form, 
    LocationInput,
    SubmitButton,

    WeatherInfo,
    LocationName,
    Temperature,
    WeatherDescription,
    Humidity,
    WindSpeed
}
    from './WeatherSearch.style';


function WeatherSearch() {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const API_KEY = '0fd0bf35b3c8b4613bfdf1a38f2c81a4';


const getWeather = async (event) => {
    event.preventDefault();
    if (!location) {
        setError('Please enter a location');
        return;
    }
    setError('');
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
    } catch (err) {
        setError(err.message)
    }
}

    return (
        <WeatherAppContainer>
            <Form onSubmit={getWeather}>
                <LocationInput 
                    type='text'
                    placeholder='Enter location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <SubmitButton type="submit">Get Weather</SubmitButton>
            </Form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && (
                <WeatherInfo>
                    <LocationName>Weather in {weatherData.name}</LocationName>
                    <Temperature>Temperature: {weatherData.main.temp}°C</Temperature>
                    <WeatherDescription>Weather: {weatherData.weather[0].description}</WeatherDescription>
                    <Humidity>Humidity: {weatherData.main.humidity}%</Humidity>
                    <WindSpeed>Wind Speed: {weatherData.wind.speed} km/h</WindSpeed>
                </WeatherInfo>
            )}
            
        </WeatherAppContainer>
    );
}

export default WeatherSearch;