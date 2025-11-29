import React, { useState } from 'react';

const App = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  const getWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=28a13360dc02345ac1a7c386d6d54cd8`
      );
      const json = await res.json();
      if (res.ok) {
        setData(json);
      } else {
        alert(json.message);
        setData(null);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h2>🌤 Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>
      {data && data.main && (
        <h3>
          {data.name}: {Math.round(data.main.temp)}°C
        </h3>
      )}
    </div>
  );
};

export default App;
