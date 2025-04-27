import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = 'bded83cf88dea1de71a044984c1a11ba';

  // Animate placeholder text typing effect
  useEffect(() => {
    const text = 'Enter the "city" name';
    let i = 0;
    const interval = setInterval(() => {
      setPlaceholderText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const fetchWeather = async () => {
    const city = query.trim();
    if (!city) {
      setError('Please enter a city name');
      setWeatherData(null);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please check the spelling.');
      setWeatherData(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Search bar */}
      <div className="w-full min-w-[350px] h-10 flex items-center text-neutral-700 bg-slate-50 rounded-lg border overflow-hidden">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholderText}
          className="w-full px-4 h-full bg-transparent outline-none placeholder:text-neutral-700"
        />
        <button
          onClick={fetchWeather}
          className="flex items-center rounded-full px-4 h-full bg-slate-50 hover:bg-yellow-100 cursor-pointer"
        >
          <IoSearch size={17} />
        </button>
      </div>
    

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Weather Result */}
            <div className="mr-16 w-full">
                {weatherData && (
                    <div className="mt-110 p-6 bg-white rounded-lg shadow-lg text-center w-full max-w-lg">
                    <h2 className="text-3xl font-bold mb-2">{weatherData.name}</h2>
                    <p className="text-xl mb-4">{weatherData.weather[0].main}</p>
                    <p className="text-5xl font-bold mb-4">{weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Pressure: {weatherData.main.pressure} hPa</p>
                    <p>Feels Like: {weatherData.main.feels_like}°C</p>
                    </div>
                )}
            </div>
        </div>
    
  );
};
export default Search;
