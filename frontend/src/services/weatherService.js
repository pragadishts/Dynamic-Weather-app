const API_BASE_URL = 'http://localhost:8000/api';

export const fetchWeatherData = async (cityName) => {
  if (!cityName.trim()) {
    throw new Error('City name cannot be empty');
  }
  
  const response = await fetch(`${API_BASE_URL}/weather?city=${encodeURIComponent(cityName)}`);
  
  if (!response.ok) {
    throw new Error('City not found');
  }
  
  return await response.json();
};

export const getWeatherIconUrl = (icon) => {
  return `https://openweathermap.org/img/wn/${icon}@4x.png`;
};