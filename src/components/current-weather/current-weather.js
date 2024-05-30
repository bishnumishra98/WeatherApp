import './current-weather.css';

const CurrentWeather = ({data}) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weather-icon'/>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp-273.15)}°C</p>
                <div className="details">
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like-273.15)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{Math.round(((data.wind.speed)*18)/5)} km/hr</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{data.main.humidity}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Clouds</span>
                        <span className='parameter-value'>{data.clouds.all}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
