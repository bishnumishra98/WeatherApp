import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import Search from './components/search/search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';


function App() {
	
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forecast, setForecast] = useState(null);

	const handleOnSearchChange = async (searchData) => {
		const [lat, lon] = searchData.value.split(" ");
		
		try {
			const currentWeatherResponse = await fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
			const currentWeatherData = await currentWeatherResponse.json();
	
			const forecastResponse = await fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
			const forecastData = await forecastResponse.json();
	
			setCurrentWeather({ city: searchData.label, ...currentWeatherData });
			setForecast({ city: searchData.label, ...forecastData });
		} catch (error) {
			console.log(error);
		}
	};

	console.log(forecast);

	return (
		<div className="container">
			<header>LIVE WEATHER APP</header>

			<Search onSearchChange={handleOnSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}

			<footer>&copy; {new Date().getFullYear()} Bishnu Mishra. All rights reserved.</footer>
		</div>
	);
}

export default App;
