import React from 'react';
import styles from '../styles/styles';
import { getWeatherIconUrl } from '../services/weatherService';

const ForecastCards = ({ forecast }) => {
  return (
    <div className="row mt-4">
      {forecast.map((day, index) => (
        <div key={day.date} className="col">
          <div style={styles.forecastCard} className="text-center p-3">
            <div style={styles.forecastDay}>
              {index === 0 ? 'Today' : day.day.substring(0, 3)}
            </div>
            <div style={styles.forecastDate}>{day.formatted_date}</div>
            <img 
              src={getWeatherIconUrl(day.icon)}
              alt={day.description}
              style={{ width: '60px', height: '60px' }}
            />
            <div style={styles.forecastTemp}>
              {Math.round(day.max_temp)}° / {Math.round(day.min_temp)}°
            </div>
            <div style={styles.forecastDesc}>{day.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForecastCards;