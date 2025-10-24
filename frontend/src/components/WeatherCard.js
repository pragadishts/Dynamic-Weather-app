import React from 'react';
import styles from '../styles/styles';
import { getWeatherIconUrl } from '../services/weatherService';

const WeatherCard = ({ today }) => {
  return (
    <div style={{ ...styles.card, ...styles.tallCard }} className="p-4 d-flex flex-column align-items-center justify-content-center">
      <div style={styles.tempLarge}>{Math.round(today.avg_temp)}°C</div>
      <img 
        src={getWeatherIconUrl(today.icon)}
        alt={today.description}
        style={{ width: '100px', height: '100px', margin: '10px 0' }}
      />
      <div style={styles.weatherDesc}>{today.description}</div>
      <div style={styles.tempRange}>
        H: {Math.round(today.max_temp)}° L: {Math.round(today.min_temp)}°
      </div>
      <div style={styles.feelsLike}>Feels like {Math.round(today.feels_like)}°C</div>
    </div>
  );
};

export default WeatherCard;