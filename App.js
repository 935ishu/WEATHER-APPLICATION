import React, { useState } from 'react';

const API_KEY = '30a75520f3248ac543f00b8a9f57f699'; // OpenWeatherMap API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    try {
      setError('');
      setWeather(null);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch weather');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, Arial, sans-serif',
      }}
    >
      <div
        style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(31,38,135,0.2)',
          maxWidth: 400,
          width: '100%',
          padding: 32,
          textAlign: 'center',
        }}
      >
        <h2 style={{ marginBottom: 24, color: '#333', letterSpacing: 1 }}>🌤️ Weather App</h2>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: 12,
            width: '80%',
            borderRadius: 8,
            border: '1px solid #bdbdbd',
            marginBottom: 16,
            fontSize: 16,
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        />
        <br />
        <button
          onClick={fetchWeather}
          style={{
            padding: 12,
            width: '60%',
            borderRadius: 8,
            border: 'none',
            background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(67,206,162,0.15)',
            transition: 'background 0.2s',
            marginBottom: 16,
          }}
        >
          Get Weather
        </button>

        {error && <p style={{ color: '#e74c3c', marginTop: 10 }}>{error}</p>}

        {weather && (
          <div
            style={{
              marginTop: 24,
              padding: 20,
              borderRadius: 16,
              background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              display: 'inline-block',
              minWidth: 220,
            }}
          >
            <h3 style={{ margin: '0 0 8px 0', color: '#185a9d' }}>
              {weather.name}, {weather.sys.country}
            </h3>
            <img
              alt="weather icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              style={{ width: 80, height: 80 }}
            />
            <p style={{ margin: '8px 0', fontSize: 18, textTransform: 'capitalize', color: '#333' }}>
              {weather.weather[0].description}
            </p>
            <p style={{ margin: '4px 0', fontSize: 22, fontWeight: 'bold', color: '#43cea2' }}>
              {weather.main.temp}°C
            </p>
            <p style={{ margin: '4px 0', color: '#888', fontSize: 14 }}>
              Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;